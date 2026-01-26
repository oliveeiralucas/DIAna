-- Migration 2: Migrar dados de Reuniao e Participante para Ata

-- Migrar dados de Reuniao para Ata
UPDATE ata
SET
  titulo = r.titulo,
  tipo = r.tipo,
  data_reuniao = r.data_reuniao,
  duracao_minutos = r.duracao_minutos,
  link_meeting = r.link_meeting,
  arquivo_audio_base64 = r.arquivo_audio_base64,
  arquivo_audio_nome = r.arquivo_audio_nome,
  arquivo_audio_tipo = r.arquivo_audio_tipo,
  arquivo_audio_tamanho = r.arquivo_audio_tamanho,
  criado_por_id = r.criado_por_id
FROM reuniao r
WHERE ata.reuniao_id = r.id;

-- Migrar participantes para JSONB
UPDATE ata
SET participantes = (
  SELECT COALESCE(jsonb_agg(
    jsonb_build_object(
      'nome', p.nome,
      'email', p.email
    )
  ), '[]'::jsonb)
  FROM participante p
  WHERE p.reuniao_id = ata.reuniao_id
);

-- Tornar campos obrigatórios NOT NULL
ALTER TABLE ata ALTER COLUMN titulo SET NOT NULL;
ALTER TABLE ata ALTER COLUMN tipo SET NOT NULL;
ALTER TABLE ata ALTER COLUMN data_reuniao SET NOT NULL;
