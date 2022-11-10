import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodoApp from "./TodoApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
