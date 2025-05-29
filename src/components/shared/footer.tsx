import { cn } from "@/utils";
import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { LogoWithImageLink } from "./logo-with-image-link";
import { RoutesEnum } from "@/routes/constants/routes-enum";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Footer: FC<Props> = ({ className, ...props }) => {
  return (
    <footer className={cn("self-stretch", className)}>
      <div className="flex items-center justify-between gap-3 rounded-t-md bg-neutral-900 p-3">
        <LogoWithImageLink />
        <p>Done by Dmitrii Golovicichin</p>
        <p>
          <time dateTime="2025">2025</time> - EBS test task
        </p>
      </div>
    </footer>
  );
};

export default Footer;
