import React from "react";
import useLocalStorage from "./useLocalStorage";

export default function Header() {
  const [username] = useLocalStorage("username", "");
  return <header>{username}</header>;
}
