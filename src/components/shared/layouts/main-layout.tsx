import { FC, PropsWithChildren } from "react";
import { cn } from "@/utils";

interface Props {
  className?: string;
}

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <div className={cn("", className)}>{children}</div>;
};
