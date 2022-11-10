import React from "react";
import { useState, memo } from "react";

export default function MemoEx() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <fieldset>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" id="firstName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </fieldset>
      <Greeting name={firstName} />
    </>
  );
}

const Greeting = memo(({ name }) => {
  console.log("Greeting rendered", new Date().toString());
  return <h1>Hello {name} !</h1>;
});
