import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@/routes/constants/routes-enum";
import { House, ShoppingCart } from "lucide-react";
import { LogoWithImageLink } from "./logo-with-image-link";
import { useCartContext } from "@/contexts/cart-context";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const headerNavLinks = [
  {
    title: "Home Page",
    href: RoutesEnum.home,
    icon: House,
  },
  {
    title: "Cart Page",
    href: RoutesEnum.cart,
    icon: ShoppingCart,
  },
];

export const Header: FC<Props> = ({ className, ...props }) => {
  const { items, getTotalItemsQuantity } = useCartContext();

  return (
    <header
      className={cn(
        "sticky top-0 z-10 flex max-h-[80px] items-center justify-between gap-x-3 rounded-b-md bg-neutral-900 p-3 shadow-lg shadow-neutral-800",
        className
      )}
      {...props}
    >
      <LogoWithImageLink />

      <ul className="flex items-center gap-3">
        {headerNavLinks.map(({ title, href, icon: Icon }) => (
          <li
            key={title}
            className="hover:text-primary flex cursor-pointer items-center gap-2 p-4 underline-offset-4 hover:underline max-sm:p-2"
            title={title}
          >
            <nav>
              <Link
                to={href}
                className="relative flex items-center gap-2"
              >
                <Icon size={20}></Icon>
                <h2>{title}</h2>
                {items.length > 0 && href === RoutesEnum.cart && (
                  <span className="after:bg-primary absolute -top-1.5 left-3.5 z-10 text-sm text-white after:absolute after:top-1/2 after:left-1/2 after:-z-10 after:h-4 after:w-4 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full">
                    {getTotalItemsQuantity()}
                  </span>
                )}
              </Link>
            </nav>
          </li>
        ))}
      </ul>
    </header>
  );
};
