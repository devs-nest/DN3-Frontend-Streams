import React, { useState, memo } from "react";

export default function MemoizedEx() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log("parent rendered");
  return (
    <>
      <form action="">
        <fieldset>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="off"
            placeholder="enter first name"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="off"
            placeholder="enter last name"
          />
        </fieldset>
      </form>
      <Greeting name={firstName} />
    </>
  );
}

const Greeting = memo(({ name }) => {
  console.log("Greeting rendered", new Date().toString());
  return <h1>Hello {name}!</h1>;
});
