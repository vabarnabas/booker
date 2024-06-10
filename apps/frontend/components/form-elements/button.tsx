import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "justify-center flex gap-x-1 items-center px-3 py-1.5 font-medium text-sm border rounded-md",
  {
    variants: {
      intent: {
        primary:
          "bg-blue-primary border-blue-primary hover:bg-blue-secondary text-white",
        secondary: "text-slate-600 border hover:bg-slate-50",
        tertiary: "bg-white",
      },
    },
    defaultVariants: { intent: "primary" },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
}

export default function Button({
  className,
  intent,
  children,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={cn(buttonVariants({ className, intent }))}>
      {icon ? icon : null}
      {children}
    </button>
  );
}
