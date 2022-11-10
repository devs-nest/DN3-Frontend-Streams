import React from "react";
import { useTodos } from "./TodosContext";

export default function CompletedTodos() {
  const todos = useTodos();
  const completedTodos = todos?.length ? todos.filter((todo) => todo.done) : null;
  return (
    <section>
      <h1>Completed Todos</h1>
      {completedTodos?.length ? (
        completedTodos.map((todo) => <p key={todo.id}>{todo.text}</p>)
      ) : (
        <p>No todos completed yet</p>
      )}
    </section>
  );
}
