import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-elevated text-secondary border border-border",
        variant === "accent" && "bg-accent/10 text-accent border border-accent/30",
        variant === "success" && "bg-success/10 text-success border border-success/30",
        className
      )}
    >
      {children}
    </span>
  );
}
