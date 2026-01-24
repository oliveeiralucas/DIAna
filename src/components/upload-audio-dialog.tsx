"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { CalendarIcon, Upload, X } from "lucide-react";
import { useAudioUpload } from "@/hooks/use-audio-upload";
import { toast } from "sonner";
import { formatFileSize } from "@/lib/upload-utils";

interface Participante {
  nome: string;
  email: string;
}

export function UploadAudioDialog() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [titulo, setTitulo] = useState("");
  const [dataReuniao, setDataReuniao] = useState<Date>();
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [novoParticipante, setNovoParticipante] = useState({
    nome: "",
    email: "",
  });

  const { upload, isUploading, progress, reset } = useAudioUpload();

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
        handleClose();
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

  const handleClose = () => {
    setOpen(false);
    setFile(null);
    setTitulo("");
    setDataReuniao(undefined);
    setParticipantes([]);
    setNovoParticipante({ nome: "", email: "" });
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload de Áudio
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Upload de Áudio de Reunião</DialogTitle>
          <DialogDescription>
            Faça upload do áudio de uma reunião presencial para transcrição
            automática
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Upload de Arquivo */}
          <div className="space-y-2">
            <Label htmlFor="audio">Arquivo de Áudio *</Label>
            {!file ? (
              <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <input
                  id="audio"
                  type="file"
                  accept=".mp3,.wav,.m4a,audio/mpeg,audio/wav,audio/mp4"
                  onChange={handleFileChange}
                  className="hidden"
                  disabled={isUploading}
                />
                <label htmlFor="audio" className="cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm font-medium">
                    Clique para selecionar ou arraste o arquivo
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    MP3, WAV ou M4A (máx. 50MB)
                  </p>
                </label>
              </div>
            ) : (
              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                    <Upload className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
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
                  <X className="h-4 w-4" />
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
              <PopoverContent className="w-auto p-0">
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
          <div className="space-y-2">
            <Label>Participantes (Opcional)</Label>
            <div className="space-y-2">
              {participantes.map((p, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-muted rounded"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium">{p.nome}</p>
                    {p.email && (
                      <p className="text-xs text-muted-foreground">{p.email}</p>
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
                  disabled={isUploading}
                />
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
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddParticipante}
                  disabled={!novoParticipante.nome || isUploading}
                >
                  Adicionar
                </Button>
              </div>
            </div>
          </div>

          {/* Barra de Progresso */}
          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Enviando arquivo...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
          )}

          {/* Botões */}
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isUploading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isUploading || !file || !titulo || !dataReuniao}
            >
              {isUploading ? "Enviando..." : "Enviar Áudio"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
