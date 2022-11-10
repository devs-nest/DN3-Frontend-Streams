import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import todosReducer from "./todosReducer";
let nextId = 4;
const initialTodos = [
  { id: 1, text: "Learn Javascript", done: true },
  { id: 2, text: "Build Spotify Clone using Javascript", done: false },
  { id: 3, text: "Learn React", done: false },
];

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  function handleAddTodo(text) {
    dispatch({
      type: "add",
      id: nextId++,
      text,
    });
  }
  function handleTodoChange(updatedTodo) {
    dispatch({
      type: "change",
      todo: updatedTodo,
    });
  }
  function handleTodoDelete(todoId) {
    dispatch({
      type: "remove",
      id: todoId,
    });
  }
  return (
    <>
      <h2>Todos</h2>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onTodoChange={handleTodoChange} onTodoDelete={handleTodoDelete} />
    </>
  );
}
