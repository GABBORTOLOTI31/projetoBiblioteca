import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  icon?: string;
}

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-on-primary hover:bg-on-primary-fixed-variant shadow-sm",
  secondary: "bg-secondary-container text-on-secondary-container hover:bg-surface-variant",
  outline: "border border-outline-variant text-secondary hover:bg-surface-container-low",
  ghost: "text-secondary hover:bg-surface-container-low",
};

const base = "px-6 py-2.5 rounded-lg font-body-md text-body-md font-medium transition-colors flex items-center justify-center gap-2";

export function Button({ children, variant = "primary", icon, className = "", ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {icon && <span className="material-symbols-outlined text-[18px]">{icon}</span>}
      {children}
    </button>
  );
}
