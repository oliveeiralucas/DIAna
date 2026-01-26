import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "icon" | "full";
}

export function Logo({ size = "md", variant = "full" }: LogoProps) {
  const sizes = {
    sm: 24,
    md: 40,
    lg: 64,
  };

  const dimension = sizes[size];

  if (variant === "icon") {
    return (
      <Image
        src="/logos/diana-icon.svg"
        alt="DIAna"
        width={dimension}
        height={dimension}
        priority
      />
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logos/diana-icon.svg"
        alt=""
        width={dimension}
        height={dimension}
        priority
      />
      <span className="text-2xl font-bold">
        <span className="text-primary">D</span>
        <span className="text-foreground">I</span>
        <span className="text-primary">A</span>
        <span className="text-foreground">na</span>
      </span>
    </div>
  );
}
