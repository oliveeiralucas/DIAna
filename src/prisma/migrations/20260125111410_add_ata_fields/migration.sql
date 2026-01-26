-- Migration 1: Adicionar novos campos na Ata

-- Adicionar campos de reunião
ALTER TABLE ata ADD COLUMN titulo VARCHAR(500);
ALTER TABLE ata ADD COLUMN tipo "TipoReuniao";
ALTER TABLE ata ADD COLUMN data_reuniao TIMESTAMP(3);
ALTER TABLE ata ADD COLUMN duracao_minutos INTEGER;
ALTER TABLE ata ADD COLUMN link_meeting TEXT;

-- Adicionar campos de áudio
ALTER TABLE ata ADD COLUMN arquivo_audio_base64 TEXT;
ALTER TABLE ata ADD COLUMN arquivo_audio_nome VARCHAR(255);
ALTER TABLE ata ADD COLUMN arquivo_audio_tipo VARCHAR(50);
ALTER TABLE ata ADD COLUMN arquivo_audio_tamanho INTEGER;

-- Adicionar campo de participantes
ALTER TABLE ata ADD COLUMN participantes JSONB;

-- Adicionar criador
ALTER TABLE ata ADD COLUMN criado_por_id UUID;

-- Criar índices
CREATE INDEX ata_data_reuniao_idx ON ata(data_reuniao DESC);
CREATE INDEX ata_tipo_idx ON ata(tipo);
