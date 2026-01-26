"use client";

import { useRouter, useParams } from "next/navigation";
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
import { useEffect, useState } from "react";

interface Participante {
  nome: string;
  email?: string;
}

export default function EditarAtaPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Campos
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState<"VIRTUAL" | "PRESENCIAL">("PRESENCIAL");
  const [dataReuniao, setDataReuniao] = useState<Date>();
  const [duracaoMinutos, setDuracaoMinutos] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [topicosDiscutidos, setTopicosDiscutidos] = useState("");
  const [decisoes, setDecisoes] = useState("");
  const [acoes, setAcoes] = useState("");
  const [pendencias, setPendencias] = useState("");
  const [proximosPassos, setProximosPassos] = useState("");
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [novoParticipante, setNovoParticipante] = useState({
    nome: "",
    email: "",
  });

  useEffect(() => {
    fetchAta();
  }, [id]);

  const fetchAta = async () => {
    try {
      const response = await fetch(`/api/atas/${id}`);
      const data = await response.json();

      if (data.success) {
        const ata = data.data;

        // Verificar se a ata está pendente
        if (ata.status !== "PENDENTE") {
          toast.error("Apenas atas pendentes podem ser editadas");
          router.push("/dashboard/atas");
          return;
        }

        setTitulo(ata.titulo || "");
        setTipo(ata.tipo || "PRESENCIAL");
        setDataReuniao(ata.dataReuniao ? new Date(ata.dataReuniao) : undefined);
        setDuracaoMinutos(ata.duracaoMinutos?.toString() || "");
        setObjetivo(ata.objetivo || "");
        setTopicosDiscutidos(
          Array.isArray(ata.topicosDiscutidos)
            ? ata.topicosDiscutidos.join("\n")
            : "",
        );
        setDecisoes(
          Array.isArray(ata.decisoes) ? ata.decisoes.join("\n") : "",
        );
        setAcoes(Array.isArray(ata.acoes) ? ata.acoes.join("\n") : "");
        setPendencias(
          Array.isArray(ata.pendencias) ? ata.pendencias.join("\n") : "",
        );
        setProximosPassos(
          ata.proximosPassos?.descricao || ata.proximosPassos || "",
        );
        // Normalizar participantes (converter strings em objetos se necessário)
        const participantesNormalizados = (ata.participantes || []).map((p: any) =>
          typeof p === 'string' ? { nome: p } : p
        );
        setParticipantes(participantesNormalizados);
      } else {
        toast.error("Erro ao carregar ata");
        router.push("/dashboard/atas");
      }
    } catch (error) {
      console.error("Error fetching ata:", error);
      toast.error("Erro ao carregar ata");
      router.push("/dashboard/atas");
    } finally {
      setIsLoading(false);
    }
  };

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
      const response = await fetch(`/api/atas/${id}`, {
        method: "PUT",
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
        toast.success("Ata atualizada com sucesso!");
        router.push("/dashboard/atas");
      } else {
        toast.error(data.message || "Erro ao atualizar ata");
      }
    } catch (error) {
      console.error("Error updating ata:", error);
      toast.error("Erro ao atualizar ata");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Editar Ata</h1>
          <p className="text-muted-foreground">
            Edite as informações da ata (apenas atas pendentes)
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informações da Ata</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Mesmos campos da página de criação */}
            <div className="space-y-2">
              <Label htmlFor="titulo">
                Título <span className="text-destructive">*</span>
              </Label>
              <Input
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>

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
                  Data <span className="text-destructive">*</span>
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

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="duracao">Duração (minutos)</Label>
                <Input
                  id="duracao"
                  type="number"
                  value={duracaoMinutos}
                  onChange={(e) => setDuracaoMinutos(e.target.value)}
                />
              </div>

            </div>

            {/* Participantes */}
            <div className="space-y-4">
              <Label>Participantes</Label>

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

            <div className="space-y-2">
              <Label htmlFor="objetivo">Objetivo</Label>
              <Textarea
                id="objetivo"
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="topicos">Tópicos Discutidos</Label>
              <Textarea
                id="topicos"
                value={topicosDiscutidos}
                onChange={(e) => setTopicosDiscutidos(e.target.value)}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="decisoes">Decisões</Label>
              <Textarea
                id="decisoes"
                value={decisoes}
                onChange={(e) => setDecisoes(e.target.value)}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="acoes">Ações</Label>
              <Textarea
                id="acoes"
                value={acoes}
                onChange={(e) => setAcoes(e.target.value)}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pendencias">Pendências</Label>
              <Textarea
                id="pendencias"
                value={pendencias}
                onChange={(e) => setPendencias(e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="proximos">Próximos Passos</Label>
              <Textarea
                id="proximos"
                value={proximosPassos}
                onChange={(e) => setProximosPassos(e.target.value)}
                rows={3}
              />
            </div>

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
                    Salvando...
                  </>
                ) : (
                  "Salvar Alterações"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
