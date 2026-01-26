"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  CheckSquare,
  Clock,
  TrendingUp,
  XCircle,
  Loader2,
  Eye,
} from "lucide-react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface DashboardStats {
  metricas: {
    totalAtas: number;
    atasPendentes: number;
    atasAprovadas: number;
    atasRejeitadas: number;
    atasRecentes: number;
  };
  atasPorTipo: Array<{
    tipo: string;
    count: number;
  }>;
  atasPorDia: Array<{
    date: string;
    count: number;
  }>;
  ultimasAtas: Array<{
    id: string;
    titulo: string;
    status: string;
    tipo: string;
    dataReuniao: string;
    createdAt: string;
    criador?: {
      nome: string;
    };
  }>;
}

const COLORS = {
  PRESENCIAL: "#8b5cf6", // purple
  VIRTUAL: "#3b82f6", // blue
};

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch("/api/dashboard");
      const data = await response.json();

      if (data.success) {
        setStats(data.data);
      } else {
        toast.error("Erro ao carregar estatísticas");
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
      toast.error("Erro ao carregar estatísticas");
    } finally {
      setLoading(false);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>Erro ao carregar dados</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral do sistema de atas
        </p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Atas
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.metricas.totalAtas}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.metricas.atasRecentes} nos últimos 30 dias
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Atas Pendentes
            </CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">
              {stats.metricas.atasPendentes}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Aguardando aprovação
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Atas Aprovadas
            </CardTitle>
            <CheckSquare className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              {stats.metricas.atasAprovadas}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.metricas.totalAtas > 0
                ? `${Math.round((stats.metricas.atasAprovadas / stats.metricas.totalAtas) * 100)}% do total`
                : "Nenhuma ata ainda"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Atas Rejeitadas
            </CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">
              {stats.metricas.atasRejeitadas}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.metricas.totalAtas > 0
                ? `${Math.round((stats.metricas.atasRejeitadas / stats.metricas.totalAtas) * 100)}% do total`
                : "Nenhuma ata ainda"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Gráfico de Atas por Período */}
        <Card>
          <CardHeader>
            <CardTitle>Atas nos Últimos 7 Dias</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            {stats.atasPorDia.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stats.atasPorDia}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(value) =>
                      format(new Date(value), "dd/MM", { locale: ptBR })
                    }
                  />
                  <YAxis allowDecimals={false} />
                  <Tooltip
                    labelFormatter={(value) =>
                      format(new Date(value), "dd 'de' MMMM", {
                        locale: ptBR,
                      })
                    }
                    formatter={(value) => [`${value} atas`, "Total"]}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={{ fill: "#8b5cf6", r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Atas criadas"
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <p>Nenhuma ata nos últimos 7 dias</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Gráfico de Atas por Tipo */}
        <Card>
          <CardHeader>
            <CardTitle>Atas por Tipo</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            {stats.atasPorTipo.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stats.atasPorTipo}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry: any) =>
                      `${entry.tipo}: ${entry.count} (${(entry.percent * 100).toFixed(0)}%)`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {stats.atasPorTipo.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[entry.tipo as keyof typeof COLORS]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} atas`, "Total"]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <p>Nenhuma ata registrada</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Últimas Atas */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Últimas Atas</CardTitle>
          <Link href="/dashboard/atas">
            <Button variant="outline" size="sm">
              Ver todas
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          {stats.ultimasAtas.length > 0 ? (
            <div className="space-y-4">
              {stats.ultimasAtas.map((ata) => (
                <div
                  key={ata.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{ata.titulo}</h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <span>{ata.tipo}</span>
                      <span>•</span>
                      <span>
                        {format(new Date(ata.dataReuniao), "dd/MM/yyyy", {
                          locale: ptBR,
                        })}
                      </span>
                      {ata.criador && (
                        <>
                          <span>•</span>
                          <span>{ata.criador.nome}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(ata.status)}
                    <Link href={`/dashboard/atas?id=${ata.id}`}>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p>Nenhuma ata registrada ainda</p>
              <p className="text-sm mt-2">
                Comece fazendo upload de um áudio ou criando uma ata manualmente
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
