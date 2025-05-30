import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const FilterSort: FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={cn("", className)}
      {...props}
    >
      <select>
        <option value="priceAsc">Price asc</option>
        <option value="priceDesc">Price desc</option>
      </select>
    </div>
  );
};
