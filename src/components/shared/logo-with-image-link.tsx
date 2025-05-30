import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@/routes/constants/routes-enum";

interface Props extends HTMLAttributes<HTMLElement> {}

export const LogoWithImageLink: FC<Props> = ({ className, ...props }) => {
  return (
    <nav className={cn("", className)} {...props}>
      <h1 className="text-4xl font-bold">
        <Link
          to={RoutesEnum.home}
          className="hover:text-primary p-2"
          title="Home Page"
        >
          EBS
        </Link>
      </h1>
    </nav>
  );
};
