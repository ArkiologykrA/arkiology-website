import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({
  children,
  className,
  hover = true,
  gradient = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-surface p-8",
        gradient && "gradient-border",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-border-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
