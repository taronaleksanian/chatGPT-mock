import { ReactNode, forwardRef } from "react";

interface ButtonProps {
  children?: ReactNode;
  type: "submit" | "button";
  className?: string;
}
export type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, ButtonProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <button
        {...props}
        className={`${className} text-snow py-1 px-4 font-semibold text-sm rounded-sm`}
        ref={ref}
      />
    );
  }
);

export default Button;
