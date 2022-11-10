import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext(null);
const ThemeContext = createContext("dark");
function Foo({ user }) {
  return (
    <>
      <h1>this is foo</h1>
      <Bar user={user} />
    </>
  );
}

function Bar({ user }) {
  return (
    <>
      <UserContext.Provider value={"joe"}>
        <h2>this is bar</h2>
        <Baz user={user} />
      </UserContext.Provider>
    </>
  );
}

function Baz() {
  const username = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <h3 style={{ background: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white" }}>
      this is baz, wazzup {username}
    </h3>
  );
}

export default function ContextEx() {
  const username = "gaurav";
  const [theme, setTheme] = useState("light");
  return (
    <div>
      Parent app say Hello {username}
      <UserContext.Provider value={username}>
        <ThemeContext.Provider value={theme}>
          <Foo user={username} />
        </ThemeContext.Provider>
      </UserContext.Provider>
      <button onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}>Toggle theme</button>
    </div>
  );
}
