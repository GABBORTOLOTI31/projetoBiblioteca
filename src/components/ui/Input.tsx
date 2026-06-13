import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: string;
  helperText?: string;
}

export function Input({ label, error, icon, helperText, className = "", ...props }: InputProps) {
  const borderClass = error
    ? "border-error focus:ring-error/20 focus:border-error"
    : "border-outline focus:ring-primary/20 focus:border-primary";

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider" htmlFor={props.id}>
        {label} {props.required && <span className="text-error">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">
            {icon}
          </span>
        )}
        <input
          className={`w-full bg-surface-container-lowest border rounded-lg py-2.5 px-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 transition-all ${icon ? "pl-10" : ""} ${borderClass} ${className}`}
          {...props}
        />
      </div>
      {helperText && !error && <p className="font-code-sm text-code-sm text-secondary">{helperText}</p>}
      {error && <p className="font-code-sm text-code-sm text-error">{error}</p>}
    </div>
  );
}
