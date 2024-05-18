import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { AllHTMLAttributes } from "react";

const textVariants = cva("", {
  variants: {
    intent: {
      primary: "text-theras-blue-text-primary",
      secondary: "text-theras-blue-background-primary",
      placeholder: "text-theras-text-placeholder",
    },
    fontSize: {
      12: "text-[0.75rem]",
      14: "text-[0.875rem]",
      16: "text-[1rem]",
      18: "text-[1.125rem]",
      20: "text-[1.25rem]",
      22: "text-[1.375rem]",
      24: "text-[1.5rem]",
      26: "text-[1.625rem]",
      28: "text-[1.75rem]",
      44: "text-[2.75rem]",
      64: "text-[4rem]",
    },
    lineHeight: {
      12: "leading-[0.75rem]",
      14: "leading-[0.875rem]",
      16: "leading-[1rem]",
      18: "leading-[1.125rem]",
      20: "leading-[1.25rem]",
      22: "leading-[1.375rem]",
      24: "leading-[1.5rem]",
      26: "leading-[1.625rem]",
      28: "leading-[1.75rem]",
      32: "leading-[2rem]",
    },
    fontWeight: {
      100: "font-[100]",
      200: "font-[200]",
      300: "font-[300]",
      400: "font-[400]",
      500: "font-[500]",
      600: "font-[600]",
      700: "font-[700]",
      800: "font-[800]",
      900: "font-[900]",
    },
  },
  defaultVariants: {
    intent: "primary",
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 400,
  },
});

interface TextProps
  extends AllHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export default function Text({
  className,
  intent,
  fontSize,
  lineHeight,
  fontWeight,
  children,
  ...rest
}: TextProps) {
  return (
    <p
      {...rest}
      className={cn(
        textVariants({ className, intent, fontSize, lineHeight, fontWeight })
      )}
    >
      {children}
    </p>
  );
}
