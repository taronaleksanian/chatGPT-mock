import { useEffect, useRef } from "react";

export const useAnswerStream = (answer: string, onStreamEnd: () => void) => {
  const answerElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    function streamString(string: string, delay: number) {
      let index = 0;

      timerId = setTimeout(function streamCharacter() {
        if (!answerElRef.current) {
          clearTimeout(timerId);
          return;
        }
        answerElRef.current.innerText = string.substring(0, index + 1);

        index++;
        if (index < string.length) {
          timerId = setTimeout(streamCharacter, delay);
        } else {
          onStreamEnd();
          clearTimeout(timerId);
        }
      }, delay);
    }

    streamString(answer, 50);
  }, [answer, onStreamEnd]);

  return answerElRef;
};
