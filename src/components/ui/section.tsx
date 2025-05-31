import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLElement> {
  title?: string;
}

export const Section: FC<PropsWithChildren<Props>> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        "rounded-md bg-neutral-900 p-6 shadow-sm max-md:p-4",
        className
      )}
      {...props}
    >
      {title && <h2 className="mb-8 text-4xl font-bold">{title}</h2>}
      {children}
    </section>
  );
};
