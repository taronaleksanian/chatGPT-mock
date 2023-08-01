import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./store";
import ChatContainer from "./containers/ChatContainer";

function App() {
  return (
    <Provider store={store}>
      <ChatContainer />
      <ToastContainer />
    </Provider>
  );
}

export default App;
