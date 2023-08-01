import { FC, useEffect } from "react";
import Prompt from "../components/Prompt";
import Question from "../components/Question";
import Answer from "../components/Answer";
import { Message, PromptForm, Sender } from "../models";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages, savePrompt } from "../store/chat/thunk";
import {
  selectGenerateAnswerState,
  selectMessagesState,
} from "../store/chat/selectors";
import Center from "../components/Center";
import StreamAnswer from "../components/StreamAnswer";
import { AppDispatch } from "../store/models";

const ChatContainer: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { messages, isFetchingMessages } = useSelector(selectMessagesState);
  const { streamAnswer, isGeneratingAnswer } = useSelector(
    selectGenerateAnswerState
  );

  const onPrompt = (data: PromptForm) => {
    dispatch(savePrompt(data.message));
  };

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-full bg-snow flex justify-center pb-16">
        <div className="relative flex flex-col w-full">
          <div className="flex-1 text-neutral font-medium pb-16">
            {isFetchingMessages ? (
              <Center>Loading...</Center>
            ) : (
              <>
                {messages.map((message: Message) =>
                  message.sender === Sender.user ? (
                    <Question key={message.ID} content={message.content} />
                  ) : (
                    <Answer key={message.ID} content={message.content} />
                  )
                )}
                {isGeneratingAnswer && <Center>...</Center>}
                {streamAnswer?.answer && (
                  <Center>
                    <StreamAnswer answer={streamAnswer.answer.content} />
                  </Center>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 bg-snow w-full">
        <Center>
          <Prompt onSubmit={onPrompt} />
        </Center>
      </div>
    </>
  );
};

export default ChatContainer;
