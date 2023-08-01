import { forwardRef } from "react";
import Center from "./Center";

interface AnswerProps {
  content?: string;
}

export type Ref = HTMLDivElement;

const Answer = forwardRef<Ref, AnswerProps>(({ content }, ref) => {
  return (
    <div className="py-4 px-3">
      <Center ref={ref}>{content}</Center>
    </div>
  );
});

export default Answer;
