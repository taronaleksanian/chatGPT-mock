import { PromptBody } from "../../models";
import Types from "./types";

export const fetchMessagesStart = () => ({
  type: Types.FETCH_MESSAGES_START,
});

export const fetchMessagesSuccess = (payload: PromptBody[]) => ({
  type: Types.FETCH_MESSAGES_SUCCESS,
  payload,
});

export const fetchMessagesFail = () => ({
  type: Types.FETCH_MESSAGES_FAIL,
});

export const generateAnswerStart = () => ({
  type: Types.GENERATE_ANSWER_START,
});

export const generateAnswerSuccess = () => ({
  type: Types.GENERATE_ANSWER_SUCCESS,
});

export const startAnswerStream = (payload: PromptBody) => ({
  type: Types.START_ANSWER_STREAM,
  payload,
});

export const generateAnswerFail = () => ({
  type: Types.GENERATE_ANSWER_FAIL,
});
