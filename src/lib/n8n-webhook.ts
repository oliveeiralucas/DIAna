interface N8NWebhookPayload {
    transcricaoId: string;
    reuniaoId: string;
    tipoReuniao: 'PRESENCIAL' | 'VIRTUAL';  // NOVO
    audioBase64: string;  // MUDANÇA: enviar base64
    audioNome: string;
    audioTipo: string;
    audioTamanho: number;
    titulo: string;
    dataReuniao: string;
    duracaoMinutos: number;  // NOVO
    participantes: Array<{
        nome: string;
        email?: string;
    }>;
}

export async function triggerN8NTranscricao(payload: N8NWebhookPayload): Promise<boolean> {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    const webhookSecret = process.env.N8N_WEBHOOK_SECRET;

    if (!webhookUrl) {
        console.error('N8N_WEBHOOK_URL not configured');
        return false;
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': webhookSecret ? `Bearer ${webhookSecret}` : '',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error('N8N webhook failed:', response.status, response.statusText);
            return false;
        }

        console.log('N8N webhook triggered successfully');
        return true;
    } catch (error) {
        console.error('Error triggering N8N webhook:', error);
        return false;
    }
}