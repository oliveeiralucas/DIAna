import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    // Validar webhook secret
    const authHeader = request.headers.get("authorization");
    const expectedSecret = process.env.N8N_WEBHOOK_SECRET
      ? `Bearer ${process.env.N8N_WEBHOOK_SECRET}`
      : null;

    if (expectedSecret && authHeader !== expectedSecret) {
      console.error("[N8N Webhook] Unauthorized");
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const { ataId, transcricao } = body;

    if (!ataId) {
      console.error("[N8N Webhook] Missing ataId");
      return NextResponse.json(
        { success: false, message: "Missing ataId" },
        { status: 400 }
      );
    }

    if (!transcricao) {
      console.error("[N8N Webhook] Missing transcricao");
      return NextResponse.json(
        { success: false, message: "Missing transcricao" },
        { status: 400 }
      );
    }

    // Verificar se a ata existe
    const ataExistente = await prisma.ata.findUnique({
      where: { id: ataId },
      select: { id: true, titulo: true },
    });

    if (!ataExistente) {
      console.error("[N8N Webhook] Ata not found:", ataId);
      return NextResponse.json(
        { success: false, message: "Ata not found" },
        { status: 404 }
      );
    }

    // Atualizar ata com dados da transcrição
    const ata = await prisma.ata.update({
      where: { id: ataId },
      data: {
        identificacao: transcricao.identificacao || null,
        objetivo: transcricao.objetivo || null,
        topicosDiscutidos: transcricao.topicos_discutidos || [],
        decisoes: transcricao.decisoes || [],
        acoes: transcricao.acoes || [],
        pendencias: transcricao.pendencias || [],
        proximosPassos: transcricao.proximos_passos || null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Transcription data saved successfully",
      ataId: ata.id,
    });
  } catch (error) {
    console.error("[N8N Webhook] Error:", error);
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
