-- Migration 4: Remover FK e dropar tabelas

-- Remover FK de Ata para Reuniao
ALTER TABLE ata DROP CONSTRAINT ata_reuniao_id_fkey;

-- Remover coluna reuniao_id
ALTER TABLE ata DROP COLUMN reuniao_id;

-- Dropar tabelas (CASCADE para garantir que todas as dependências sejam removidas)
DROP TABLE participante CASCADE;
DROP TABLE reuniao CASCADE;
