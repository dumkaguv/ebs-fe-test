import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Skeleton: FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-100", className)}
      {...props}
    />
  );
};
