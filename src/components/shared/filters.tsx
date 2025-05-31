import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";
import { FilterCategories } from "@/components/shared";
import { FilterSort } from "./filter-sort";

interface Props extends HTMLAttributes<HTMLDivElement> {
  categories?: Set<string>;
  isLoading?: boolean;
  isError?: boolean;
}

export const Filters: FC<Props> = ({
  categories,
  isLoading,
  isError,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex justify-between gap-10 max-md:flex-col max-md:gap-5 md:items-center",
        className
      )}
      {...props}
    >
      <FilterCategories
        categoriesSet={categories}
        isLoading={isLoading}
        isError={isError}
      />

      <FilterSort />
    </div>
  );
};
