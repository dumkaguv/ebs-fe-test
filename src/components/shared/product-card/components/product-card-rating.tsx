import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/utils";
import { Product } from "@/@types/product";
import { Star } from "lucide-react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  rating: Product["rating"];
}

export const ProductCardRating: FC<Props> = ({
  rating,
  className,
  ...props
}) => {
  return (
    <p
      className={cn("flex items-center", className)}
      {...props}
    >
      {rating.rate}
      <Star
        size={16}
        fill="#FFFFFF"
        className="ml-1 text-yellow-300"
      />
      <span className="self-start text-[12px]">({rating.count})</span>
    </p>
  );
};
