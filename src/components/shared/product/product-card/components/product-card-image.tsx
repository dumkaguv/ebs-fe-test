import { FC, ImgHTMLAttributes } from "react";
import { cn } from "@/utils";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

export const ProductCardImage: FC<Props> = ({ className, ...props }) => {
  return (
    <img
      className={cn("h-60 w-full rounded-md object-cover", className)}
      {...props}
    ></img>
  );
};
