import { VariantProps, cva } from "class-variance-authority";
import { InputHTMLAttributes, useEffect, useMemo, useRef } from "react";

import { cn } from "@/utils/cn";
import Text from "./text";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  title?: string;
  hasEditIcon?: boolean;
  fontSizeModifier?: number;
  errorMessage?: string;
}

const inputVariants = cva(
  "shadow-sm w-full flex items-center px-3 py-1 placeholder:text-theras-blue-text-secondary font-normal border rounded-md text-theras-blue-text-secondary disabled:bg-theras-background-neutral disabled:text-theras-text-neutral disabled:cursor-not-allowed disabled:border-theras-background-neutral outline-none",
  {
    variants: {
      intent: {
        primary: "border-theras-blue-background-secondary",
      },
      error: {
        error: "border-rose-500",
      },
    },
    defaultVariants: { intent: "primary" },
  }
);

export default function Input({
  className,
  intent,
  error,
  title,
  hasEditIcon,
  errorMessage,
  fontSizeModifier = 0.85,
  ...rest
}: InputProps) {
  return (
    <div className="w-full">
      {title ? (
        <div className="relative">
          <Text className="mb-2" lineHeight={16} fontWeight={500} fontSize={14}>
            {title}
          </Text>
        </div>
      ) : null}
      <div className="relative flex">
        <input
          type="text"
          {...rest}
          className={cn(inputVariants({ className, error, intent }))}
        />
      </div>
      {errorMessage ? (
        <Text fontSize={12} className="text-rose-500">
          {errorMessage}
        </Text>
      ) : null}
    </div>
  );
}
