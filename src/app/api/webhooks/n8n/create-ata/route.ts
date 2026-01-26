import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Webhook endpoint for N8N to create atas from online meetings (Tactiq + Google Drive)
 *
 * Flow:
 * 1. Tactiq transcribes online meeting
 * 2. Tactiq saves to Google Drive
 * 3. N8N Google Drive trigger activates
 * 4. N8N processes transcript and formats
 * 5. N8N calls this endpoint to create ata
 */
export async function POST(request: NextRequest) {
  try {
    // Validar webhook secret
    const authHeader = request.headers.get("authorization");
    const expectedSecret = process.env.N8N_WEBHOOK_SECRET
      ? `Bearer ${process.env.N8N_WEBHOOK_SECRET}`
      : null;

    if (expectedSecret && authHeader !== expectedSecret) {
      console.error("[N8N Create Ata] Unauthorized");
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Validar campos obrigatórios
    const { titulo, dataReuniao, participantes, transcricao } = body;

    if (!titulo || !dataReuniao) {
      console.error("[N8N Create Ata] Missing required fields");
      return NextResponse.json(
        { success: false, message: "Missing required fields: titulo, dataReuniao" },
        { status: 400 }
      );
    }

    // Normalizar participantes (converter strings em objetos se necessário)
    const participantesNormalizados = (participantes || []).map((p: any) => {
      if (typeof p === 'string') {
        return { nome: p };
      }
      return p;
    });

    // Criar ata
    const ata = await prisma.ata.create({
      data: {
        // Informações básicas
        titulo: titulo,
        tipo: 'VIRTUAL', // Sempre VIRTUAL para reuniões online
        dataReuniao: new Date(dataReuniao),
        duracaoMinutos: body.duracaoMinutos || null,

        // Participantes
        participantes: participantesNormalizados,

        // Dados da transcrição (já formatados pelo N8N)
        identificacao: transcricao?.identificacao || null,
        objetivo: transcricao?.objetivo || null,
        topicosDiscutidos: transcricao?.topicos_discutidos || [],
        decisoes: transcricao?.decisoes || [],
        acoes: transcricao?.acoes || [],
        pendencias: transcricao?.pendencias || [],
        proximosPassos: transcricao?.proximos_passos || null,

        // Status inicial
        status: 'PENDENTE',
      },
    });

    return NextResponse.json({
      success: true,
      message: "Ata created successfully",
      data: {
        ataId: ata.id,
        titulo: ata.titulo,
        tipo: ata.tipo,
        status: ata.status,
      },
    });
  } catch (error) {
    console.error("[N8N Create Ata] Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
