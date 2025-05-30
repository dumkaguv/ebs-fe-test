import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { cn } from "@/utils";

const sizes = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md gap-1.5 px-3",
  lg: "h-10 rounded-md px-6",
};

const variants = {
  default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
  outline:
    "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
};

type Size = keyof typeof sizes;
type Variant = keyof typeof variants;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  size = "default",
  variant = "default",
  type = "button",
  ...props
}) => {
  return (
    <button
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        sizes[size],
        variants[variant],
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
