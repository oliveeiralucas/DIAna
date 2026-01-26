"use client";

import { Input } from "./input";
import { Label } from "./label";

const DOMAIN = "@ogrupoegx.com";

interface EmailInputProps {
  id?: string;
  value: string; // Full email
  onChange: (email: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
}

export function EmailInput({
  id,
  value,
  onChange,
  placeholder = "seu.nome",
  disabled,
  required,
  label = "Email Corporativo",
}: EmailInputProps) {
  // Extrair username da parte antes do @
  const username = value.includes("@") ? value.split("@")[0] : value;

  const handleChange = (input: string) => {
    // Remove @ e tudo depois se usuário digitar
    const cleanInput = input.split("@")[0];
    // Converte para email completo
    const fullEmail = cleanInput + DOMAIN;
    onChange(fullEmail);
  };

  return (
    <div className="space-y-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative">
        <Input
          id={id}
          type="text"
          value={username}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete="username"
          className="pr-36"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
          {DOMAIN}
        </span>
      </div>
    </div>
  );
}
