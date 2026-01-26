'use client';

import { useState } from 'react';
import { UploadAudioResponse } from '@/types/upload';

interface UploadOptions {
    file: File;
    titulo: string;
    dataReuniao: string;
    participantes?: Array<{ nome: string; email?: string }>;
    reuniaoId?: string;
    onProgress?: (progress: number) => void;
}

export function useAudioUpload() {
    const [isUploading, setIsUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const upload = async (options: UploadOptions): Promise<UploadAudioResponse> => {
        setIsUploading(true);
        setProgress(0);

        const formData = new FormData();
        formData.append('audio', options.file);
        formData.append('titulo', options.titulo);
        formData.append('dataReuniao', options.dataReuniao);

        if (options.reuniaoId) {
            formData.append('reuniaoId', options.reuniaoId);
        }

        if (options.participantes && options.participantes.length > 0) {
            formData.append('participantes', JSON.stringify(options.participantes));
        }

        try {
            const xhr = new XMLHttpRequest();

            // Criar Promise para aguardar upload
            const uploadPromise = new Promise<UploadAudioResponse>((resolve, reject) => {
                xhr.upload.addEventListener('progress', (e) => {
                    if (e.lengthComputable) {
                        const percentComplete = Math.round((e.loaded / e.total) * 100);
                        setProgress(percentComplete);
                        options.onProgress?.(percentComplete);
                    }
                });

                xhr.addEventListener('load', () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        const response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } else {
                        const error = JSON.parse(xhr.responseText);
                        reject(new Error(error.message || 'Erro no upload'));
                    }
                });

                xhr.addEventListener('error', () => {
                    reject(new Error('Erro de rede ao fazer upload'));
                });

                xhr.addEventListener('abort', () => {
                    reject(new Error('Upload cancelado'));
                });

                xhr.open('POST', '/api/atas/upload-audio');
                xhr.send(formData);
            });

            const result = await uploadPromise;
            setProgress(100);
            return result;
        } catch (error) {
            throw error;
        } finally {
            setIsUploading(false);
        }
    };

    const reset = () => {
        setIsUploading(false);
        setProgress(0);
    };

    return {
        upload,
        isUploading,
        progress,
        reset,
    };
}