import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./Counter";
import Stopwatch from "./Stopwatch";
import KittyGallery from "./KittyGallery";
import DemoCounter from "./DemoCounter";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import Header from "./header";
import FruitBasket from "./FruitBasket";
import MemoEx from "./MemoEx";

function App() {
  const [username, setUsername] = useLocalStorage("username", "");
  const [showHeader, setShowHeader] = useState(false);

  console.log("%c App: render start", "color: hotpink");

  const [showCounter, setShowCounter] = useState(() => {
    console.log("%c App: useState", "color:coral");
    return false;
  });

  useEffect(() => {
    console.log("%c App: useEffect no deps called", "color:royalblue");

    return () => {
      console.log("%c App: useEffect no deps clean up", "color:darkred");
    };
  });
  useEffect(() => {
    console.log("%c App: useEffect empty deps called", "color:royalblue");

    return () => {
      console.log("%c App: useEffect empty deps clean up", "color:darkred");
    };
  }, []);
  useEffect(() => {
    console.log("%c App: useEffect with deps called", "color:royalblue");

    return () => {
      console.log("%c App: useEffect with deps clean up", "color:darkred");
    };
  }, [showCounter]);
  function submitForm(e) {
    e.preventDefault();
    setShowHeader((prev) => !prev);
  }
  const element = (
    <>
      {showHeader && <Header />}
      <main className="App">
        <label htmlFor="showCounter">Show Counter</label>
        <input type="checkbox" name="showCounter" id="showCounter" onChange={(e) => setShowCounter(e.target.checked)} />
        {/* {showCounter && <DemoCounter />} */}
        {/* <Counter /> */}
        {/* <Stopwatch /> */}
        {/* <KittyGallery />
      <KittyGallery /> */}
        {/* <form action="" onSubmit={submitForm}>
          <fieldset>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </fieldset>
          <button type="submit">Login</button>
        </form> */}
        {/* <FruitBasket /> */}
        <MemoEx />
      </main>
    </>
  );
  console.log("%c App: render end", "color: hotpink");
  return element;
}

export default App;
