import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

export const ProductCardTitle: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h3
      className={cn("text-lg font-bold", className)}
      {...props}
    >
      {children}
    </h3>
  );
};
