import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

export const ProductCardDescription: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn("text-lg", className)}
      {...props}
    >
      {children}
    </p>
  );
};
