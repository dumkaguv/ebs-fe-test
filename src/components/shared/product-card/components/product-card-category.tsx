import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

export const ProductCardCategory: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn("text-base font-normal", className)}
      {...props}
    >
      {children}
    </p>
  );
};
