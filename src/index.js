import ReactDOM from "react-dom";
import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  rootElement
);
