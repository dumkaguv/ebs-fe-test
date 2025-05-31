import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";
import { useFilterCategories } from "../hooks";
import { FilterCategoriesSkeleton } from "./filter-categories-skeleton";

interface Props extends HTMLAttributes<HTMLUListElement> {
  categoriesSet?: Set<string>;
  isLoading?: boolean;
  isError?: boolean;
}

export const FilterCategories: FC<Props> = ({
  categoriesSet,
  className,
  isLoading,
  isError,
  ...props
}) => {
  const { categories, activeIndex, onCategoryItemClick } =
    useFilterCategories(categoriesSet);

  if (isLoading) {
    return (
      <FilterCategoriesSkeleton
        count={5}
        className={className}
        {...props}
      />
    );
  }

  if (isError) {
    return <p>Failed to load categories. Try again later.</p>;
  }

  return (
    <ul
      className={cn(
        "flex w-full items-center gap-5 overflow-x-auto overflow-y-hidden max-lg:max-w-[700px]",
        className
      )}
      role="tablist"
      {...props}
    >
      {categories.map((category, index) => (
        <li
          key={category}
          className={cn(
            "cursor-pointer rounded-xl bg-neutral-950/20 p-4 text-lg font-bold text-nowrap capitalize shadow-sm shadow-neutral-800 duration-200 hover:scale-[1.02] hover:bg-neutral-800",
            activeIndex === index && "bg-neutral-700 hover:bg-neutral-700"
          )}
          onClick={() => onCategoryItemClick(index)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onCategoryItemClick(index);
            }
          }}
          role="tab"
          aria-selected={activeIndex === index}
          tabIndex={0}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};
