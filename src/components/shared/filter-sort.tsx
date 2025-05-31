import { FC, HTMLAttributes, useEffect, useState } from "react";
import { cn } from "@/utils";
import { useSearchParams } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLSelectElement> {}

export const sortOptions = {
  priceAsc: "price",
  priceDesc: "-price",
} as const;

export const sortParams = {
  sortBy: "sort_by",
} as const;

export const FilterSort: FC<Props> = ({ className, ...props }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortCriteria, setSortCriteria] = useState(
    () => searchParams.get(sortParams.sortBy) ?? ""
  );

  useEffect(() => {
    const current = searchParams.get(sortParams.sortBy) ?? "";
    setSortCriteria(current);
  }, [searchParams]);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);

    if (sortCriteria) {
      newParams.set(sortParams.sortBy, sortCriteria);
    } else {
      newParams.delete(sortParams.sortBy);
    }

    setSearchParams(newParams);
  }, [sortCriteria]);

  return (
    <select
      className={cn(
        "cursor-pointer rounded-xl bg-neutral-950/20 p-4 text-lg font-bold capitalize shadow-sm shadow-neutral-800 duration-200 hover:scale-[1.02] hover:bg-neutral-800",
        className
      )}
      value={sortCriteria}
      onChange={(event) => setSortCriteria(event.target.value)}
      {...props}
    >
      <option value="">Sort by</option>
      <option value={sortOptions.priceAsc}>Price asc ⬆️</option>
      <option value={sortOptions.priceDesc}>Price desc ⬇️</option>
    </select>
  );
};
