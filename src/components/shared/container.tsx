import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("mx-auto max-w-[1440px]", className)} {...props}>{children}</div>
  );
};
