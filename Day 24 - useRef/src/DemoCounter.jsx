import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function DemoCounter() {
  console.log("%c Counter: render start", "color: orange");
  function handleClick() {
    setCount(count + 1);
  }
  const [count, setCount] = useState(() => {
    console.log("%c Counter: useState", "color:coral");
    return 0;
  });
  useEffect(() => {
    console.log("%c Counter: useEffect no deps called", "color:royalblue");

    return () => {
      console.log("%c Counter: useEffect no deps clean up", "color:darkred");
    };
  });
  useEffect(() => {
    console.log("%c Counter: useEffect empty deps called", "color:royalblue");

    return () => {
      console.log("%c Counter: useEffect empty deps clean up", "color:darkred");
    };
  }, []);
  useEffect(() => {
    console.log("%c Counter: useEffect with deps called", "color:royalblue");

    return () => {
      console.log("%c Counter: useEffect with deps clean up", "color:darkred");
    };
  }, [count]);

  const counterElement = <button onClick={handleClick}>Count: {count}</button>;

  console.log("%c Counter: render end", "color: orange");
  return counterElement;
}

export default DemoCounter;
