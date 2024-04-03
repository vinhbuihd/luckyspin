import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { cn } from "../utils/utils";

const buttonVariants = cva(
  "items-center flex font-[600] text-[15px] px-[36px] py-[10px] rounded-[12px]",
  {
    variants: {
      variant: {
        default: "font-sans  border-[1.5px] text-white bg-primary ",
        outline:
          "font-sans  bg-white text-primary border-[1px] border-primary shadow-none",
        ghost:
          "gap-[4px] text-white bg-[#ffffff33] px-[4px] font-[600] text-[13px]",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      {children}
    </button>
  )
);
