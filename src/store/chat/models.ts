import { PromptBody, Message } from "../../models";
import Types from "./types";

export interface FetchMessageStartAction {
  type: Types.FETCH_MESSAGES_START;
}

export interface FetchMessageSuccessAction {
  type: Types.FETCH_MESSAGES_SUCCESS;
  payload: PromptBody[];
}
export interface FetchMessageFailAction {
  type: Types.FETCH_MESSAGES_FAIL;
}

export interface GenerateAnswerStartAction {
  type: Types.GENERATE_ANSWER_START;
}

export interface StartAnswerStreamAction {
  type: Types.START_ANSWER_STREAM;
  payload: PromptBody;
}

export interface GenerateAnswerSuccessAction {
  type: Types.GENERATE_ANSWER_SUCCESS;
}
export interface GenerateAnswerFailAction {
  type: Types.GENERATE_ANSWER_FAIL;
}

export type ChatAction =
  | FetchMessageStartAction
  | FetchMessageSuccessAction
  | FetchMessageFailAction
  | GenerateAnswerStartAction
  | StartAnswerStreamAction
  | GenerateAnswerSuccessAction
  | GenerateAnswerSuccessAction
  | GenerateAnswerFailAction;

export interface ChatState {
  isFetchingMessages: boolean;
  isGeneratingAnswer: boolean;
  streamAnswer: PromptBody | null;
  messages: Message[];
}
