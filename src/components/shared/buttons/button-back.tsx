import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { cn } from "@/utils";
import { Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonBack: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      size="lg"
      className={cn("mb-10 gap-2 py-6 text-lg", className)}
      {...props}
    >
      {children || (
        <>
          <ArrowBigLeft size={40} />
          Go Back
        </>
      )}
    </Button>
  );
};
