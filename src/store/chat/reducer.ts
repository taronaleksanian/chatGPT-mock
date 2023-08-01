import Types from "./types";
import { Message, PromptBody } from "../../models";
import { ChatAction, ChatState } from "./models";

const initialState: ChatState = {
  isFetchingMessages: false,
  isGeneratingAnswer: false,
  streamAnswer: null,
  messages: [],
};

const chatReducer = (state = initialState, action: ChatAction) => {
  switch (action.type) {
    case Types.FETCH_MESSAGES_START:
      return {
        ...state,
        isFetchingMessages: true,
      };
    case Types.FETCH_MESSAGES_SUCCESS: {
      const { payload }: { payload: PromptBody[] } = action;

      return {
        ...state,
        isFetchingMessages: false,
        messages: payload.reduce<Message[]>((res, current) => {
          res.push(current.question, current.answer);
          return res;
        }, []),
      };
    }
    case Types.FETCH_MESSAGES_FAIL: {
      return {
        ...state,
        isFetchingMessages: false,
      };
    }
    case Types.GENERATE_ANSWER_START: {
      return {
        ...state,
        isGeneratingAnswer: true,
      };
    }
    case Types.START_ANSWER_STREAM: {
      const { payload }: { payload: PromptBody } = action;

      return {
        ...state,
        isGeneratingAnswer: false,
        streamAnswer: payload,
        messages: [...state.messages, payload.question],
      };
    }
    case Types.GENERATE_ANSWER_SUCCESS: {
      const { streamAnswer }: { streamAnswer: PromptBody | null } = state;
      if (streamAnswer === null) {
        return { ...state };
      }

      return {
        ...state,
        isGeneratingAnswer: false,
        streamAnswer: null,
        messages: [...state.messages, streamAnswer.answer],
      };
    }
    case Types.GENERATE_ANSWER_FAIL: {
      return {
        ...state,
        isGeneratingAnswer: false,
      };
    }
    default:
      return state;
  }
};

export default chatReducer;
