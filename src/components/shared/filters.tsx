import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";
import { FilterCategories } from "@/components/shared";

interface Props extends HTMLAttributes<HTMLDivElement> {
  categories?: Set<string>;
}

export const Filters: FC<Props> = ({ categories, className, ...props }) => {
  if (!categories) return null;

  return (
    <div className={cn("", className)} {...props}>
      <FilterCategories categories={categories} />
    </div>
  );
};
