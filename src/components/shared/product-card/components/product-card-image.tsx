import { FC, ImgHTMLAttributes } from "react";
import { cn } from "@/utils";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

export const ProductCardImage: FC<Props> = ({
  width = 250,
  height = 250,
  alt = "",
  className,
  ...props
}) => {
  return (
    <img
      className={cn("h-60 w-full rounded-md object-cover", className)}
      width={width}
      height={height}
      alt={alt}
      {...props}
    />
  );
};
