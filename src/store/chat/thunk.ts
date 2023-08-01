import { Dispatch } from "redux";
import { toast } from "react-toastify";
import * as Actions from "./actions";
import { Answers } from "../../constant";
import { PromptBody, Sender } from "../../models";
import { generateUUID } from "../../helpers";
import * as api from "../../api/chat.api";
import { AppThunk } from "../models";

export const fetchMessages = (): AppThunk => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(Actions.fetchMessagesStart());
      const body: PromptBody[] = await api.fetchMessages();

      dispatch(Actions.fetchMessagesSuccess(body));
    } catch (e: unknown) {
      const errorMessage =
        e instanceof Error ? e.message : "Someting went wrong!";
      toast.error(errorMessage);
      dispatch(Actions.fetchMessagesFail());
    }
  };
};

export const savePrompt = (message: string): AppThunk => {
  return async (dispatch: Dispatch) => {
    try {
      const answer = Answers[message] || Answers.default;
      const body: PromptBody = {
        question: { ID: generateUUID(), sender: Sender.user, content: message },
        answer: { ID: generateUUID(), sender: Sender.bot, content: answer },
      };
      await api.savePrompt(body);
      dispatch(Actions.startAnswerStream(body));
    } catch (e: unknown) {
      const errorMessage =
        e instanceof Error ? e.message : "Someting went wrong!";
      toast.error(errorMessage);
      dispatch(Actions.generateAnswerFail());
    }
  };
};
