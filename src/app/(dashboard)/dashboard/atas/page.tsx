"use client";

import { SetStateAction, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  CheckSquare,
  Loader2,
  Search,
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";

interface Ata {
  id: string;
  titulo: string;
  tipo: string;
  dataReuniao: string;
  duracaoMinutos?: number;
  participantes: Array<{
    nome: string;
    email?: string;
  }>;
  objetivo?: string;
  topicosDiscutidos?: any;
  decisoes?: any;
  acoes?: any;
  pendencias?: any;
  proximosPassos?: any;
  // Campos antigos para compatibilidade
  resumo?: string;
  topicos?: any;
  conteudoCompleto?: string;
  status: "PENDENTE" | "APROVADA" | "REJEITADA";
  comentarios?: string;
  dataAprovacao?: string;
  createdAt: string;
  updatedAt?: string;
  aprovadoPor?: {
    nome: string;
    email: string;
  };
}

export default function AtasPage() {
  const [atas, setAtas] = useState<Ata[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAta, setSelectedAta] = useState<Ata | null>(null);
  const [approving, setApproving] = useState(false);
  const [comentarios, setComentarios] = useState("");

  // Filtros
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  // Paginação
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  useEffect(() => {
    fetchAtas();
  }, [page, statusFilter]);

  const fetchAtas = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
      });

      if (search) params.append("search", search);
      if (statusFilter && statusFilter !== "ALL") {
        params.append("status", statusFilter);
      }

      const response = await fetch(`/api/atas?${params}`);
      const data = await response.json();

      if (data.success) {
        setAtas(data.data);
        setTotalPages(data.pagination.totalPages);
        setTotal(data.pagination.total);
      } else {
        toast.error("Erro ao carregar atas");
      }
    } catch (error) {
      toast.error("Erro ao carregar atas");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchAtas();
  };

  const handleViewAta = (ata: Ata) => {
    setSelectedAta(ata);
    setComentarios(ata.comentarios || "");
  };

  const handleApprove = async (status: "APROVADA" | "REJEITADA") => {
    if (!selectedAta) return;

    if (status === "REJEITADA" && !comentarios.trim()) {
      toast.error("Adicione um comentário ao rejeitar a ata");
      return;
    }

    setApproving(true);
    try {
      const response = await fetch(`/api/atas/${selectedAta.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status,
          comentarios: comentarios.trim() || null,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(
          status === "APROVADA" ? "Ata aprovada com sucesso!" : "Ata rejeitada",
        );
        setSelectedAta(null);
        setComentarios("");
        fetchAtas();
      } else {
        toast.error(data.message || "Erro ao atualizar ata");
      }
    } catch (error) {
      toast.error("Erro ao atualizar ata");
    } finally {
      setApproving(false);
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === "PENDENTE") {
      return <Badge variant="outline">Pendente</Badge>;
    }
    if (status === "APROVADA") {
      return <Badge className="bg-green-500">Aprovada</Badge>;
    }
    if (status === "REJEITADA") {
      return <Badge variant="destructive">Rejeitada</Badge>;
    }
    return <Badge>{status}</Badge>;
  };

  return (
    <>
      <div className="space-y-6">
        {/* Filtros */}
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="flex gap-2">
                  <Input
                    placeholder="Buscar por título..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <Button onClick={handleSearch}>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">Todos</SelectItem>
                  <SelectItem value="PENDENTE">Pendente</SelectItem>
                  <SelectItem value="APROVADA">Aprovada</SelectItem>
                  <SelectItem value="REJEITADA">Rejeitada</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tabela */}
        <Card>
          <CardHeader>
            <CardTitle>Atas ({total})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : atas.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <CheckSquare className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <p>Nenhuma ata encontrada</p>
              </div>
            ) : (
              <>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Criada em</TableHead>
                      <TableHead>Aprovada por</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {atas.map((ata) => (
                      <TableRow
                        key={ata.id}
                        onClick={() => handleViewAta(ata)}
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleViewAta(ata);
                          }
                        }}
                        role="button"
                        aria-label={`Ver detalhes da ata ${ata.titulo}`}
                      >
                        <TableCell className="font-medium">
                          {ata.titulo}
                        </TableCell>
                        <TableCell>
                          {ata.dataReuniao
                            ? format(
                                new Date(ata.dataReuniao),
                                "dd/MM/yyyy",
                                {
                                  locale: ptBR,
                                }
                              )
                            : "N/A"}
                        </TableCell>
                        <TableCell>{getStatusBadge(ata.status)}</TableCell>
                        <TableCell>
                          {ata.createdAt
                            ? format(new Date(ata.createdAt), "dd/MM/yyyy HH:mm", {
                                locale: ptBR,
                              })
                            : "N/A"}
                        </TableCell>
                        <TableCell>{ata.aprovadoPor?.nome || "-"}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation(); // Previne duplo clique
                              handleViewAta(ata);
                            }}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Ver Detalhes
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Paginação */}
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-muted-foreground">
                    Página {page} de {totalPages} ({total} atas)
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPage(page - 1)}
                      disabled={page === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPage(page + 1)}
                      disabled={page === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Dialog de Detalhes e Aprovação */}
      <Dialog open={!!selectedAta} onOpenChange={() => setSelectedAta(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <DialogTitle>Detalhes da Ata</DialogTitle>
                <DialogDescription>{selectedAta?.titulo}</DialogDescription>
              </div>
              {/* Navegação entre atas */}
              {atas.length > 1 && selectedAta && (
                <div className="flex gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentIndex = atas.findIndex(
                        (a) => a.id === selectedAta.id,
                      );
                      if (currentIndex > 0) {
                        handleViewAta(atas[currentIndex - 1]);
                      }
                    }}
                    disabled={
                      atas.findIndex((a) => a.id === selectedAta.id) === 0
                    }
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentIndex = atas.findIndex(
                        (a) => a.id === selectedAta.id,
                      );
                      if (currentIndex < atas.length - 1) {
                        handleViewAta(atas[currentIndex + 1]);
                      }
                    }}
                    disabled={
                      atas.findIndex((a) => a.id === selectedAta.id) ===
                      atas.length - 1
                    }
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </DialogHeader>

          {selectedAta && (
            <div className="space-y-6">
              {/* Status de Processamento */}
              {selectedAta.status === "PENDENTE" &&
                !selectedAta.objetivo &&
                !selectedAta.topicosDiscutidos &&
                !selectedAta.decisoes && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3">
                    <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">
                        Ata em processamento
                      </p>
                      <p className="text-sm text-blue-700">
                        A transcrição está sendo gerada. Isso pode levar alguns minutos.
                      </p>
                    </div>
                  </div>
                )}

              {/* Card de Metadados */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label className="text-xs text-muted-foreground uppercase">
                      Data
                    </Label>
                    <p className="font-semibold text-lg">
                      {selectedAta.dataReuniao
                        ? format(new Date(selectedAta.dataReuniao), "dd/MM/yyyy", {
                            locale: ptBR,
                          })
                        : "N/A"}
                    </p>
                    {selectedAta.dataReuniao && (
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(selectedAta.dataReuniao), "EEEE", {
                          locale: ptBR,
                        })}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground uppercase">
                      Tipo
                    </Label>
                    <p className="font-semibold">{selectedAta.tipo}</p>
                    {selectedAta.duracaoMinutos && (
                      <p className="text-sm text-muted-foreground">
                        {selectedAta.duracaoMinutos} minutos
                      </p>
                    )}
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground uppercase">
                      Status
                    </Label>
                    <div className="mt-1">
                      {getStatusBadge(selectedAta.status)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Participantes Destacados */}
              {selectedAta.participantes && selectedAta.participantes.length > 0 && (
                <div>
                  <Label className="text-sm font-semibold uppercase mb-3 block">
                    Participantes ({selectedAta.participantes.length})
                  </Label>
                  <div className="grid gap-2 md:grid-cols-2">
                    {selectedAta.participantes.map((p, i) => {
                      // Normalizar participante (pode ser string ou objeto)
                      const participante = typeof p === 'string' ? { nome: p } : p;
                      const nome = participante?.nome || 'Participante';
                      const email = participante?.email;

                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                        >
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                            {nome.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{nome}</p>
                            {email && (
                              <p className="text-xs text-muted-foreground truncate">
                                {email}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Objetivo */}
              {selectedAta.objetivo && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <Label className="text-sm font-semibold text-blue-900 uppercase block mb-2">
                    Objetivo
                  </Label>
                  <p className="text-sm text-blue-900 whitespace-pre-wrap">
                    {selectedAta.objetivo}
                  </p>
                </div>
              )}

              {/* Tópicos Discutidos */}
              {selectedAta.topicosDiscutidos &&
                Array.isArray(selectedAta.topicosDiscutidos) &&
                selectedAta.topicosDiscutidos.length > 0 && (
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <Label className="text-sm font-semibold text-purple-900 uppercase block mb-3">
                      📋 Tópicos Discutidos
                    </Label>
                    <ul className="space-y-2">
                      {selectedAta.topicosDiscutidos.map(
                        (topico: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-purple-900"
                          >
                            <span className="text-purple-500 font-bold mt-0.5">
                              •
                            </span>
                            <span className="flex-1">{topico}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}

              {/* Decisões */}
              {selectedAta.decisoes &&
                Array.isArray(selectedAta.decisoes) &&
                selectedAta.decisoes.length > 0 && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <Label className="text-sm font-semibold text-green-900 uppercase block mb-3">
                      ✓ Decisões Tomadas
                    </Label>
                    <ul className="space-y-2">
                      {selectedAta.decisoes.map((decisao: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-green-900"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          <span className="flex-1">{decisao}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Ações */}
              {selectedAta.acoes &&
                Array.isArray(selectedAta.acoes) &&
                selectedAta.acoes.length > 0 && (
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                    <Label className="text-sm font-semibold text-orange-900 uppercase block mb-3">
                      🎯 Ações Definidas
                    </Label>
                    <ul className="space-y-2">
                      {selectedAta.acoes.map((acao: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-orange-900 bg-white p-2 rounded"
                        >
                          <span className="text-orange-600 font-bold">
                            {i + 1}.
                          </span>
                          <span className="flex-1">{acao}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Pendências */}
              {selectedAta.pendencias &&
                Array.isArray(selectedAta.pendencias) &&
                selectedAta.pendencias.length > 0 && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <Label className="text-sm font-semibold text-yellow-900 uppercase block mb-3">
                      ⏳ Pendências
                    </Label>
                    <ul className="space-y-2">
                      {selectedAta.pendencias.map(
                        (pendencia: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-yellow-900"
                          >
                            <span className="text-yellow-600 font-bold mt-0.5">
                              •
                            </span>
                            <span className="flex-1">{pendencia}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}

              {/* Próximos Passos */}
              {selectedAta.proximosPassos && (
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                  <Label className="text-sm font-semibold text-indigo-900 uppercase block mb-2">
                    ➡️ Próximos Passos
                  </Label>
                  <p className="text-sm text-indigo-900 whitespace-pre-wrap">
                    {typeof selectedAta.proximosPassos === "string"
                      ? selectedAta.proximosPassos
                      : selectedAta.proximosPassos.descricao ||
                        JSON.stringify(selectedAta.proximosPassos)}
                  </p>
                </div>
              )}

              {/* Comentários de Aprovação/Rejeição */}
              {selectedAta.status !== "PENDENTE" && selectedAta.comentarios && (
                <div>
                  <Label className="text-muted-foreground">Comentários</Label>
                  <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm">{selectedAta.comentarios}</p>
                    {selectedAta.aprovadoPor && (
                      <p className="text-xs text-muted-foreground mt-2">
                        Por {selectedAta.aprovadoPor.nome}
                        {selectedAta.dataAprovacao &&
                          ` em ${format(new Date(selectedAta.dataAprovacao), "PPp", {
                            locale: ptBR,
                          })}`}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Área de Aprovação (apenas para atas pendentes) */}
              {selectedAta.status === "PENDENTE" && (
                <div className="space-y-4 pt-4 border-t">
                  {/* Botão Editar (se a ata tem conteúdo) */}
                  {(selectedAta.objetivo ||
                    selectedAta.topicosDiscutidos ||
                    selectedAta.decisoes) && (
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedAta(null);
                          window.location.href = `/dashboard/atas/${selectedAta.id}/editar`;
                        }}
                      >
                        Editar Ata
                      </Button>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="comentarios">
                      Comentários{" "}
                      {selectedAta.status === "PENDENTE" &&
                        "(obrigatório para rejeição)"}
                    </Label>
                    <Textarea
                      id="comentarios"
                      value={comentarios}
                      onChange={(e: {
                        target: { value: SetStateAction<string> };
                      }) => setComentarios(e.target.value)}
                      placeholder="Adicione comentários sobre a ata..."
                      rows={3}
                      disabled={approving}
                      className="mt-2"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => handleApprove("REJEITADA")}
                      disabled={approving}
                      className="flex-1"
                    >
                      <XCircle className="mr-2 h-4 w-4" />
                      {approving ? "Processando..." : "Rejeitar"}
                    </Button>
                    <Button
                      onClick={() => handleApprove("APROVADA")}
                      disabled={approving}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      {approving ? "Processando..." : "Aprovar"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
