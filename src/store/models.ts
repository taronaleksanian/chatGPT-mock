import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ChatAction, ChatState } from "./chat/models";
import { Action, AnyAction } from "redux";

export interface AppState {
  chat: ChatState;
}

export type AppAction = ChatAction;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<AppState, undefined, AnyAction>;
