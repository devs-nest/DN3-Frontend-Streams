import React from "react";
import { useContext, createContext, useReducer } from "react";
import todosReducer from "./todosReducer";
const initialTodos = [
  { id: 1, text: "Learn Javascript", done: true },
  { id: 2, text: "Build Spotify Clone using Javascript", done: false },
  { id: 3, text: "Learn React", done: false },
];

const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);

export default function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>{children}</TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export const useTodos = () => useContext(TodosContext);
export const useDispatch = () => useContext(TodosDispatchContext);
