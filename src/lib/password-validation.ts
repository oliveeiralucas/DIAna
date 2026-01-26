export const PASSWORD_REQUIREMENTS = {
  minLength: 8,
  maxLength: 128,
  requireUppercase: true,
  requireLowercase: true,
  requireNumber: true,
  requireSpecial: false, // Nível médio não exige
};

export interface PasswordStrength {
  score: 0 | 1 | 2 | 3 | 4; // 0=muito fraca, 4=muito forte
  feedback: string;
  checks: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
  };
  isValid: boolean;
}

export function validatePasswordStrength(password: string): PasswordStrength {
  const checks = {
    length: password.length >= PASSWORD_REQUIREMENTS.minLength &&
            password.length <= PASSWORD_REQUIREMENTS.maxLength,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
  };

  const passedChecks = Object.values(checks).filter(Boolean).length;

  let score: 0 | 1 | 2 | 3 | 4;
  let feedback: string;

  if (passedChecks === 0) {
    score = 0;
    feedback = "Muito fraca";
  } else if (passedChecks === 1) {
    score = 1;
    feedback = "Fraca";
  } else if (passedChecks === 2) {
    score = 2;
    feedback = "Média";
  } else if (passedChecks === 3) {
    score = 3;
    feedback = "Forte";
  } else {
    score = 4;
    feedback = "Muito forte";
  }

  const isValid = checks.length && checks.uppercase &&
                  checks.lowercase && checks.number;

  return { score, feedback, checks, isValid };
}

export function getPasswordErrorMessage(password: string): string | null {
  if (!password) return "Senha é obrigatória";
  if (password.length < PASSWORD_REQUIREMENTS.minLength) {
    return `Senha deve ter no mínimo ${PASSWORD_REQUIREMENTS.minLength} caracteres`;
  }
  if (password.length > PASSWORD_REQUIREMENTS.maxLength) {
    return `Senha deve ter no máximo ${PASSWORD_REQUIREMENTS.maxLength} caracteres`;
  }
  if (!/[A-Z]/.test(password)) {
    return "Senha deve conter pelo menos uma letra maiúscula";
  }
  if (!/[a-z]/.test(password)) {
    return "Senha deve conter pelo menos uma letra minúscula";
  }
  if (!/[0-9]/.test(password)) {
    return "Senha deve conter pelo menos um número";
  }
  return null;
}
