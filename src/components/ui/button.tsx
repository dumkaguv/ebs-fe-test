import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { cn } from "@/utils";

const sizes = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
};

type Size = keyof typeof sizes;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: Size;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  size = "default",
  type = "button",
  ...props
}) => {
  return (
    <button
      className={cn(
        "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap shadow-xs outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        sizes[size],
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
