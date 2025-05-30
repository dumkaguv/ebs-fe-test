import { FC, HTMLAttributes, useEffect, useState } from "react";
import { cn } from "@/utils";
import { useSearchParams } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLUListElement> {
  categories: Set<string>;
}

export const FilterCategories: FC<Props> = ({
  categories,
  className,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const categoriesArray = [...categories];

  const onCategoryItemClick = (index: number) => {
    const category = categoriesArray[index];
    setActiveIndex(index);

    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    setSearchParams(params);
  };

  useEffect(() => {
    const currentCategory = searchParams.get("category");
    if (currentCategory) {
      const index = [...categories].findIndex(
        (category) => category === currentCategory,
      );
      if (index !== -1) setActiveIndex(index);
    }
  }, [searchParams, categories]);

  return (
    <ul
      className={cn("flex items-center gap-5", className)}
      role="tablist"
      {...props}
    >
      {categoriesArray.map((category, index) => (
        <li
          key={category}
          className={cn(
            "cursor-pointer rounded-xl bg-neutral-950/20 p-4 text-lg font-bold capitalize shadow-sm shadow-neutral-800 duration-200 hover:scale-[1.02] hover:bg-neutral-800",
            activeIndex === index && "bg-neutral-700 hover:bg-neutral-700",
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
