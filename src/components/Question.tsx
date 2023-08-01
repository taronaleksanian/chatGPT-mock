import { FC } from "react";
import Center from "./Center";

interface QuestionProps {
  content: string;
}

const Question: FC<QuestionProps> = ({ content }) => {
  return (
    <div className="py-4 px-3 bg-background">
      <Center>{content}</Center>
    </div>
  );
};

export default Question;
