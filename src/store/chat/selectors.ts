import { createSelector } from "reselect";
import { AppState } from "../models";

const selectChatState = (state: AppState) => state.chat;

export const selectMessagesState = createSelector(
  selectChatState,
  (chatState) => ({
    isFetchingMessages: chatState.isFetchingMessages,
    messages: chatState.messages,
  })
);

export const selectGenerateAnswerState = createSelector(
  selectChatState,
  (chatState) => ({
    isGeneratingAnswer: chatState.isGeneratingAnswer,
    streamAnswer: chatState.streamAnswer,
  })
);
