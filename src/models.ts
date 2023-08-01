export interface PromptForm {
  message: string;
}

export enum Sender {
  user = "user",
  bot = "bot",
}

export interface Message {
  ID: string;
  content: string;
  sender: Sender;
}

export type PromptBody = Record<"question" | "answer", Message>;
