import { ALLOWED_AUDIO_TYPES, ALLOWED_AUDIO_EXTENSIONS, MAX_FILE_SIZE } from '@/types/upload';

export function validateAudioFile(file: File): { valid: boolean; error?: string } {
    // Validar tipo MIME
    if (!ALLOWED_AUDIO_TYPES.includes(file.type as any)) {
        return {
            valid: false,
            error: 'Tipo de arquivo não permitido. Use MP3, WAV ou M4A.',
        };
    }

    // Validar extensão
    const extension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
    if (!ALLOWED_AUDIO_EXTENSIONS.includes(extension as any)) {
        return {
            valid: false,
            error: 'Extensão de arquivo não permitida. Use .mp3, .wav ou .m4a.',
        };
    }

    // Validar tamanho
    const maxSize = parseInt(process.env.MAX_AUDIO_SIZE_MB || '50') * 1024 * 1024;
    if (file.size > maxSize) {
        return {
            valid: false,
            error: `Arquivo muito grande. Tamanho máximo: ${process.env.MAX_AUDIO_SIZE_MB || 50}MB`,
        };
    }

    return { valid: true };
}

export function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}