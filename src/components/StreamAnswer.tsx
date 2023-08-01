import { FC, useCallback } from "react";
import { useAnswerStream } from "../hooks";
import { useDispatch } from "react-redux";
import { generateAnswerSuccess } from "../store/chat/actions";
import Answer from "./Answer";

interface StreamAnswerProps {
  answer: string;
}

const StreamAnswer: FC<StreamAnswerProps> = ({ answer }) => {
  const dispatch = useDispatch();
  const onStreamEnd = useCallback(() => {
    dispatch(generateAnswerSuccess());
  }, [dispatch]);
  const ref = useAnswerStream(answer, onStreamEnd);

  return <Answer ref={ref} />;
};

export default StreamAnswer;
