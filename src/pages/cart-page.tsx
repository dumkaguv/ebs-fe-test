import { FC } from "react";

interface Props {
  className?: string;
}

export const CartPage: FC = () => {
  return (
    <section className="mt-5 rounded-md bg-neutral-900 p-4 shadow-sm">
      Cart
    </section>
  );
};
