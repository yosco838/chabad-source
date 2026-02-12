import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "accent";
  href?: string;
  type?: "button" | "submit";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500",
  secondary:
    "bg-white text-primary-500 border border-neutral-300 hover:bg-primary-50 focus-visible:ring-primary-500",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500",
};

export function Button({
  variant = "primary",
  href,
  type = "button",
  children,
  className,
  disabled,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
