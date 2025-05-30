import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";
import { FilterCategories } from "@/components/shared";

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
  if (!categories) return null;

  return (
    <div
      className={cn("", className)}
      {...props}
    >
      <FilterCategories
        categoriesSet={categories}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};
