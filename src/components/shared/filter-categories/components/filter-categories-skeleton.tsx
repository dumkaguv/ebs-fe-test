import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLUListElement> {
  count?: number;
}

export const FilterCategoriesSkeleton: FC<Props> = ({
  count = 5,
  className,
  ...props
}) => {
  return (
    <ul
      className={cn("flex items-center gap-5", className)}
      role="tablist"
      {...props}
    >
      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className="h-15 w-30 animate-pulse rounded-xl bg-neutral-800/50"
          role="tab"
          aria-disabled="true"
        />
      ))}
    </ul>
  );
};
