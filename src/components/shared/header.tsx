import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@/routes/constants/routes-enum";
import { House, ShoppingCart } from "lucide-react";
import { LogoWithImageLink } from "./logo-with-image-link";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

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
  return (
    <header
      className={cn(
        "sticky top-0 z-10 flex max-h-[80px] items-center justify-between gap-x-3 rounded-b-md bg-neutral-900 p-3 shadow-lg shadow-neutral-800",
        className,
      )}
      {...props}
    >
      <LogoWithImageLink />

      <ul className="flex items-center gap-3">
        {headerNavLinks.map(({ title, href, icon: Icon }) => (
          <li
            key={title}
            className="hover:text-primary relative flex cursor-pointer items-center gap-2 p-4 underline-offset-4 hover:underline"
            title={title}
          >
            <nav>
              <Link to={href} className="flex items-center gap-2">
                <Icon size={20} />
                <h2>{title}</h2>
              </Link>
            </nav>
          </li>
        ))}
      </ul>
    </header>
  );
};
