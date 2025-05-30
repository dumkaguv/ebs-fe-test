import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const ProductListCardSkeleton: FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "flex animate-pulse flex-col rounded-md bg-neutral-900/30 p-0.5 shadow-md shadow-neutral-800",
        className
      )}
      {...props}
    >
      <div className="h-60 w-full rounded-md bg-neutral-700" />

      <div className="flex flex-col gap-2 px-2 py-4">
        <div className="h-5 w-3/4 rounded bg-neutral-700" />
        <div className="h-4 w-1/2 rounded bg-neutral-700" />
        <div className="h-4 w-1/3 rounded bg-neutral-700" />
        <div className="h-4 w-1/4 rounded bg-neutral-700" />
      </div>

      <div className="mt-7 flex items-center justify-between gap-4 p-2">
        <div className="h-10 w-24 rounded bg-neutral-700" />
        <div className="h-10 w-20 rounded bg-neutral-700" />
      </div>
    </div>
  );
};
