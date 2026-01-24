"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Upload, X, Plus } from "lucide-react";
import { useAudioUpload } from "@/hooks/use-audio-upload";
import { toast } from "sonner";
import { formatFileSize } from "@/lib/upload-utils";
import { useRouter } from "next/navigation";

interface Participante {
  nome: string;
  email: string;
}

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [titulo, setTitulo] = useState("");
  const [dataReuniao, setDataReuniao] = useState<Date>();
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [novoParticipante, setNovoParticipante] = useState({
    nome: "",
    email: "",
  });

  const { upload, isUploading, progress, reset } = useAudioUpload();
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
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

    if (!file || !titulo || !dataReuniao) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }

    try {
      const result = await upload({
        file,
        titulo,
        dataReuniao: dataReuniao.toISOString(),
        participantes: participantes.length > 0 ? participantes : undefined,
      });

      if (result.success) {
        toast.success("Áudio enviado com sucesso!", {
          description: "A transcrição será processada em breve.",
        });

        // Resetar formulário
        setFile(null);
        setTitulo("");
        setDataReuniao(undefined);
        setParticipantes([]);
        reset();

        // Redirecionar para reuniões
        router.push("/dashboard/reunioes");
      } else {
        toast.error("Erro ao enviar áudio", {
          description: result.message,
        });
      }
    } catch (error) {
      toast.error("Erro ao fazer upload", {
        description: error instanceof Error ? error.message : "Tente novamente",
      });
    }
  };

  return (
    <div className="flex justify-center w-full">
      <Card>
        <CardHeader>
          <CardTitle>Upload de Áudio</CardTitle>
          <CardDescription>
            Faça upload do áudio de uma reunião presencial para transcrição
            automática
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Upload de Arquivo */}
            <div className="space-y-2">
              <Label htmlFor="audio">Arquivo de Áudio *</Label>
              {!file ? (
                <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer bg-gray-50">
                  <input
                    id="audio"
                    type="file"
                    accept=".mp3,.wav,.m4a,audio/mpeg,audio/wav,audio/mp4"
                    onChange={handleFileChange}
                    className="hidden"
                    disabled={isUploading}
                  />
                  <label htmlFor="audio" className="cursor-pointer">
                    <Upload className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                    <p className="text-base font-medium mb-2">
                      Clique para selecionar ou arraste o arquivo
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Formatos aceitos: MP3, WAV ou M4A (máx. 50MB)
                    </p>
                  </label>
                </div>
              ) : (
                <div className="border rounded-lg p-4 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={handleRemoveFile}
                    disabled={isUploading}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              )}
            </div>

            {/* Título */}
            <div className="space-y-2">
              <Label htmlFor="titulo">Título da Reunião *</Label>
              <Input
                id="titulo"
                placeholder="Ex: Reunião de Planejamento Q1"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
                disabled={isUploading}
              />
            </div>

            {/* Data da Reunião */}
            <div className="space-y-2">
              <Label>Data da Reunião *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dataReuniao && "text-muted-foreground",
                    )}
                    disabled={isUploading}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dataReuniao ? (
                      format(dataReuniao, "PPP", { locale: ptBR })
                    ) : (
                      <span>Selecione uma data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dataReuniao}
                    onSelect={setDataReuniao}
                    initialFocus
                    locale={ptBR}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Participantes */}
            <div className="space-y-3">
              <Label>Participantes (Opcional)</Label>

              {participantes.length > 0 && (
                <div className="space-y-2">
                  {participantes.map((p, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
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
                        disabled={isUploading}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-2 p-4 border rounded-lg bg-gray-50">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Input
                      placeholder="Nome do participante"
                      value={novoParticipante.nome}
                      onChange={(e) =>
                        setNovoParticipante({
                          ...novoParticipante,
                          nome: e.target.value,
                        })
                      }
                      disabled={isUploading}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Email (opcional)"
                      type="email"
                      value={novoParticipante.email}
                      onChange={(e) =>
                        setNovoParticipante({
                          ...novoParticipante,
                          email: e.target.value,
                        })
                      }
                      disabled={isUploading}
                    />
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleAddParticipante}
                  disabled={!novoParticipante.nome || isUploading}
                  className="w-full"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Participante
                </Button>
              </div>
            </div>

            {/* Barra de Progresso */}
            {isUploading && (
              <div className="space-y-2 p-4 border rounded-lg bg-blue-50">
                <div className="flex justify-between text-sm font-medium">
                  <span>Enviando arquivo...</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Aguarde enquanto o arquivo é enviado para processamento
                </p>
              </div>
            )}

            {/* Botão de Enviar */}
            <Button
              type="submit"
              disabled={isUploading || !file || !titulo || !dataReuniao}
              className="w-full"
              size="lg"
            >
              {isUploading ? "Enviando..." : "Enviar Áudio para Transcrição"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
