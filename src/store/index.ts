import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root.reducer";
import { AppAction, AppState } from "./models";

const store: Store<AppState, AppAction> = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
