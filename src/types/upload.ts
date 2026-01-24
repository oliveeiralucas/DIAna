export interface UploadAudioRequest {
    reuniaoId: string;
    titulo: string;
    dataReuniao: string;
    participantes?: Array<{
        nome: string;
        email?: string;
    }>;
}

export interface UploadAudioResponse {
    success: boolean;
    message?: string;
    data?: {
        transcricaoId: string;
        reuniaoId: string;
        webhookTriggered: boolean;
    };
}

export const ALLOWED_AUDIO_TYPES = [
    'audio/mpeg',      // MP3
    'audio/wav',       // WAV
    'audio/x-wav',     // WAV alternativo
    'audio/mp4',       // M4A
    'audio/x-m4a',     // M4A alternativo
] as const;

export const ALLOWED_AUDIO_EXTENSIONS = ['.mp3', '.wav', '.m4a'] as const;

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB em bytes