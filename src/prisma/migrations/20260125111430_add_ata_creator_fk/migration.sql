-- Migration 3: Adicionar foreign key criador

ALTER TABLE ata
ADD CONSTRAINT ata_criado_por_id_fkey
FOREIGN KEY (criado_por_id)
REFERENCES usuario(id)
ON DELETE SET NULL;
