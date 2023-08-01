export enum ChatActionType {
  FETCH_MESSAGES_START = "FETCH_MESSAGES_START",
  FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS",
  FETCH_MESSAGES_FAIL = "FETCH_MESSAGES_FAIL",
  GENERATE_ANSWER_START = "GENERATE_ANSWER_START",
  GENERATE_ANSWER_SUCCESS = "GENERATE_ANSWER_SUCCESS",
  START_ANSWER_STREAM = "START_ANSWER_STREAM",
  GENERATE_ANSWER_FAIL = "GENERATE_ANSWER_FAIL",
}

export default ChatActionType;