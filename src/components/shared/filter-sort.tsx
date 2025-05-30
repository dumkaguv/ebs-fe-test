import { FC, HTMLAttributes, useEffect, useState } from "react";
import { cn } from "@/utils";
import { useSearchParams } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLSelectElement> {}

const sortOptions = {
  priceAsc: "price",
  priceDesc: "-price",
};

export const FilterSort: FC<Props> = ({ className, ...props }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortCriteria, setSortCriteria] = useState(
    () => searchParams.get("sort_by") ?? ""
  );

  useEffect(() => {
    const current = searchParams.get("sort_by") ?? "";
    setSortCriteria(current);
  }, [searchParams]);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);

    if (sortCriteria) {
      newParams.set("sort_by", sortCriteria);
    } else {
      newParams.delete("sort_by");
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
      <option value={sortOptions.priceAsc}>Price asc ⬆️</option>
      <option value={sortOptions.priceDesc}>Price desc ⬇️</option>
    </select>
  );
};
