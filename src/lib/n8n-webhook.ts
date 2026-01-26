interface N8NWebhookPayload {
    ataId: string;
    tipo: 'PRESENCIAL' | 'VIRTUAL';
    audioBase64: string;
    audioNome: string;
    audioTipo: string;
    audioTamanho: number;
    titulo: string;
    dataReuniao: string;
    duracaoMinutos: number;
    participantes: Array<{
        nome: string;
        email?: string;
    }>;
}

export async function triggerN8NTranscricao(payload: N8NWebhookPayload): Promise<boolean> {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error('N8N_WEBHOOK_URL not configured');
        return false;
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error('N8N webhook failed:', response.status, response.statusText);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error triggering N8N webhook:', error);
        return false;
    }
}