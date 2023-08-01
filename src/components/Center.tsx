import { ReactNode, forwardRef } from "react";

interface CenterProps {
  children?: ReactNode;
  className?: string;
}
export type Ref = HTMLDivElement;

const Center = forwardRef<Ref, CenterProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        {...props}
        className={`${className} w-full max-w-[600px] mx-auto`}
        ref={ref}
      />
    );
  }
);

export default Center;
