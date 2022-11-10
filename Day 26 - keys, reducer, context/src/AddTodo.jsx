import React from "react";
import { useState } from "react";

export default function AddTodo({ onAddTodo }) {
  const [text, setText] = useState("");
  return (
    <div className="add-todo-container">
      <input type="text" name="newTodo" id="newTodo" value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          onAddTodo(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}
