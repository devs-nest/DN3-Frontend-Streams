import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextEx from "./ContextEx";
import "./index.css";
import TodoApp from "./TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoApp /> */}
    <ContextEx />
  </React.StrictMode>
);
