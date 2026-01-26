"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, X, Plus, ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface Participante {
  nome: string;
  email?: string;
}

export default function NovaAtaPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Campos obrigatórios
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState<"VIRTUAL" | "PRESENCIAL">("PRESENCIAL");
  const [dataReuniao, setDataReuniao] = useState<Date>();

  // Campos opcionais
  const [duracaoMinutos, setDuracaoMinutos] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [topicosDiscutidos, setTopicosDiscutidos] = useState("");
  const [decisoes, setDecisoes] = useState("");
  const [acoes, setAcoes] = useState("");
  const [pendencias, setPendencias] = useState("");
  const [proximosPassos, setProximosPassos] = useState("");

  // Participantes
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [novoParticipante, setNovoParticipante] = useState({
    nome: "",
    email: "",
  });

  const handleAddParticipante = () => {
    if (novoParticipante.nome) {
      setParticipantes([...participantes, novoParticipante]);
      setNovoParticipante({ nome: "", email: "" });
    }
  };

  const handleRemoveParticipante = (index: number) => {
    setParticipantes(participantes.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!titulo || !tipo || !dataReuniao) {
      toast.error("Preencha os campos obrigatórios (título, tipo, data)");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/atas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo,
          tipo,
          dataReuniao: dataReuniao.toISOString(),
          duracaoMinutos: duracaoMinutos ? parseInt(duracaoMinutos) : undefined,
          participantes: participantes.length > 0 ? participantes : undefined,
          objetivo: objetivo || undefined,
          topicosDiscutidos: topicosDiscutidos
            ? topicosDiscutidos.split("\n").filter((t) => t.trim())
            : undefined,
          decisoes: decisoes
            ? decisoes.split("\n").filter((d) => d.trim())
            : undefined,
          acoes: acoes ? acoes.split("\n").filter((a) => a.trim()) : undefined,
          pendencias: pendencias
            ? pendencias.split("\n").filter((p) => p.trim())
            : undefined,
          proximosPassos: proximosPassos
            ? { descricao: proximosPassos }
            : undefined,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Ata criada com sucesso!");
        router.push("/dashboard/atas");
      } else {
        toast.error(data.message || "Erro ao criar ata");
      }
    } catch (error) {
      console.error("Error creating ata:", error);
      toast.error("Erro ao criar ata");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Nova Ata</h1>
          <p className="text-muted-foreground">
            Crie uma ata de reunião manualmente
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informações da Ata</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Título */}
            <div className="space-y-2">
              <Label htmlFor="titulo">
                Título <span className="text-destructive">*</span>
              </Label>
              <Input
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ex: Reunião de Planejamento Sprint 10"
                required
              />
            </div>

            {/* Tipo e Data */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="tipo">
                  Tipo <span className="text-destructive">*</span>
                </Label>
                <Select value={tipo} onValueChange={(v: any) => setTipo(v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PRESENCIAL">Presencial</SelectItem>
                    <SelectItem value="VIRTUAL">Virtual</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>
                  Data da Reunião <span className="text-destructive">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dataReuniao && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dataReuniao ? (
                        format(dataReuniao, "PPP", { locale: ptBR })
                      ) : (
                        <span>Selecione a data</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dataReuniao}
                      onSelect={setDataReuniao}
                      locale={ptBR}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Duração e Link */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="duracao">Duração (minutos)</Label>
                <Input
                  id="duracao"
                  type="number"
                  value={duracaoMinutos}
                  onChange={(e) => setDuracaoMinutos(e.target.value)}
                  placeholder="Ex: 60"
                />
              </div>

            </div>

            {/* Participantes */}
            <div className="space-y-4">
              <Label>Participantes</Label>

              {/* Lista de participantes */}
              {participantes.length > 0 && (
                <div className="space-y-2">
                  {participantes.map((p, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{p.nome}</p>
                        {p.email && (
                          <p className="text-sm text-muted-foreground">
                            {p.email}
                          </p>
                        )}
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveParticipante(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              {/* Adicionar participante */}
              <div className="flex gap-2">
                <Input
                  placeholder="Nome"
                  value={novoParticipante.nome}
                  onChange={(e) =>
                    setNovoParticipante({
                      ...novoParticipante,
                      nome: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Email (opcional)"
                  value={novoParticipante.email}
                  onChange={(e) =>
                    setNovoParticipante({
                      ...novoParticipante,
                      email: e.target.value,
                    })
                  }
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddParticipante}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Objetivo */}
            <div className="space-y-2">
              <Label htmlFor="objetivo">Objetivo</Label>
              <Textarea
                id="objetivo"
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}
                placeholder="Descreva o objetivo da reunião..."
                rows={3}
              />
            </div>

            {/* Tópicos Discutidos */}
            <div className="space-y-2">
              <Label htmlFor="topicos">
                Tópicos Discutidos
                <span className="text-sm text-muted-foreground ml-2">
                  (um por linha)
                </span>
              </Label>
              <Textarea
                id="topicos"
                value={topicosDiscutidos}
                onChange={(e) => setTopicosDiscutidos(e.target.value)}
                placeholder="Tópico 1&#10;Tópico 2&#10;Tópico 3"
                rows={4}
              />
            </div>

            {/* Decisões */}
            <div className="space-y-2">
              <Label htmlFor="decisoes">
                Decisões
                <span className="text-sm text-muted-foreground ml-2">
                  (uma por linha)
                </span>
              </Label>
              <Textarea
                id="decisoes"
                value={decisoes}
                onChange={(e) => setDecisoes(e.target.value)}
                placeholder="Decisão 1&#10;Decisão 2"
                rows={4}
              />
            </div>

            {/* Ações */}
            <div className="space-y-2">
              <Label htmlFor="acoes">
                Ações
                <span className="text-sm text-muted-foreground ml-2">
                  (uma por linha)
                </span>
              </Label>
              <Textarea
                id="acoes"
                value={acoes}
                onChange={(e) => setAcoes(e.target.value)}
                placeholder="Ação 1&#10;Ação 2"
                rows={4}
              />
            </div>

            {/* Pendências */}
            <div className="space-y-2">
              <Label htmlFor="pendencias">
                Pendências
                <span className="text-sm text-muted-foreground ml-2">
                  (uma por linha)
                </span>
              </Label>
              <Textarea
                id="pendencias"
                value={pendencias}
                onChange={(e) => setPendencias(e.target.value)}
                placeholder="Pendência 1&#10;Pendência 2"
                rows={3}
              />
            </div>

            {/* Próximos Passos */}
            <div className="space-y-2">
              <Label htmlFor="proximos">Próximos Passos</Label>
              <Textarea
                id="proximos"
                value={proximosPassos}
                onChange={(e) => setProximosPassos(e.target.value)}
                placeholder="Descreva os próximos passos..."
                rows={3}
              />
            </div>

            {/* Botões */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                disabled={isSubmitting}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Criando...
                  </>
                ) : (
                  "Criar Ata"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
