"use client";

import { validatePasswordStrength } from "@/lib/password-validation";
import { Check, X } from "lucide-react";

interface PasswordStrengthIndicatorProps {
  password: string;
  showRequirements?: boolean;
}

export function PasswordStrengthIndicator({
  password,
  showRequirements = true
}: PasswordStrengthIndicatorProps) {
  const strength = validatePasswordStrength(password);

  const strengthColors = {
    0: "bg-gray-200",
    1: "bg-red-500",
    2: "bg-orange-500",
    3: "bg-yellow-500",
    4: "bg-green-500",
  };

  const strengthWidths = {
    0: "w-0",
    1: "w-1/4",
    2: "w-2/4",
    3: "w-3/4",
    4: "w-full",
  };

  if (!password) return null;

  return (
    <div className="space-y-2 mt-2">
      {/* Barra de força */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${strengthColors[strength.score]} ${strengthWidths[strength.score]}`}
            />
          </div>
          <span className="text-xs font-medium min-w-[80px] text-right">
            {strength.feedback}
          </span>
        </div>
      </div>

      {/* Lista de requisitos */}
      {showRequirements && (
        <ul className="text-xs space-y-1">
          <RequirementItem
            met={strength.checks.length}
            text="Mínimo 8 caracteres"
          />
          <RequirementItem
            met={strength.checks.uppercase}
            text="Pelo menos 1 letra maiúscula"
          />
          <RequirementItem
            met={strength.checks.lowercase}
            text="Pelo menos 1 letra minúscula"
          />
          <RequirementItem
            met={strength.checks.number}
            text="Pelo menos 1 número"
          />
        </ul>
      )}
    </div>
  );
}

function RequirementItem({ met, text }: { met: boolean; text: string }) {
  return (
    <li className={`flex items-center gap-2 ${met ? "text-green-600" : "text-gray-500"}`}>
      {met ? (
        <Check className="h-3 w-3" />
      ) : (
        <X className="h-3 w-3" />
      )}
      <span>{text}</span>
    </li>
  );
}
