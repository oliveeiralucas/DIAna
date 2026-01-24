"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FileText,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Loader2,
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { Reuniao } from "@/types/reuniao";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ReunioesPage() {
  const [reunioes, setReunioes] = useState<Reuniao[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchReunioes();
  }, []);

  const fetchReunioes = async () => {
    try {
      const response = await fetch("/api/reunioes");
      const data = await response.json();

      if (data.success) {
        setReunioes(data.data);
      } else {
        toast.error("Erro ao carregar reuniões");
      }
    } catch (error) {
      toast.error("Erro ao carregar reuniões");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    setDeleting(true);
    try {
      const response = await fetch(`/api/reunioes/${deleteId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Reunião deletada com sucesso");
        setReunioes(reunioes.filter((r) => r.id !== deleteId));
        setDeleteId(null);
      } else {
        toast.error(data.message || "Erro ao deletar reunião");
      }
    } catch (error) {
      toast.error("Erro ao deletar reunião");
    } finally {
      setDeleting(false);
    }
  };

  const getStatusBadge = (reuniao: Reuniao) => {
    if (!reuniao.transcricao) {
      return <Badge variant="secondary">Sem transcrição</Badge>;
    }

    if (reuniao.transcricao.status === "PENDENTE") {
      return <Badge variant="outline">Pendente</Badge>;
    }

    if (reuniao.transcricao.status === "PROCESSANDO") {
      return <Badge variant="default">Processando</Badge>;
    }

    if (reuniao.transcricao.ata) {
      if (reuniao.transcricao.ata.status === "PENDENTE") {
        return <Badge variant="outline">Ata Pendente</Badge>;
      }
      if (reuniao.transcricao.ata.status === "APROVADA") {
        return <Badge className="bg-green-500">Aprovada</Badge>;
      }
      if (reuniao.transcricao.ata.status === "REJEITADA") {
        return <Badge variant="destructive">Rejeitada</Badge>;
      }
    }

    return <Badge>Concluída</Badge>;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (reunioes.length === 0) {
    return (
      <Card>
        <CardContent className="py-12">
          <div className="text-center text-muted-foreground">
            <FileText className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p>Nenhuma reunião registrada ainda</p>
            <p className="text-sm mt-2">Comece fazendo upload de um áudio</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Reuniões ({reunioes.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Duração</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Criado por</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reunioes.map((reuniao) => (
                <TableRow key={reuniao.id}>
                  <TableCell className="font-medium">
                    {reuniao.titulo}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        reuniao.tipo === "VIRTUAL" ? "default" : "secondary"
                      }
                    >
                      {reuniao.tipo}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {format(new Date(reuniao.dataReuniao), "dd/MM/yyyy", {
                      locale: ptBR,
                    })}
                  </TableCell>
                  <TableCell>
                    {reuniao.duracaoMinutos
                      ? `${reuniao.duracaoMinutos} min`
                      : "-"}
                  </TableCell>
                  <TableCell>{getStatusBadge(reuniao)}</TableCell>
                  <TableCell>{reuniao.criador?.nome || "-"}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/reunioes/${reuniao.id}`}>
                            <Eye className="mr-2 h-4 w-4" />
                            Ver Detalhes
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/dashboard/reunioes/${reuniao.id}/editar`}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => setDeleteId(reuniao.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Deletar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Dialog de Confirmação de Exclusão */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja deletar esta reunião? Esta ação não pode
              ser desfeita e todos os dados relacionados (transcrição e ata)
              serão removidos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={deleting}
              className="bg-red-600 hover:bg-red-700"
            >
              {deleting ? "Deletando..." : "Deletar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
