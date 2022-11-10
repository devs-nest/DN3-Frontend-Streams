import React from "react";
import { useState } from "react";

const pizzaToppings = [
  { id: "z", topping: "onion" },
  { id: "x", topping: "margherita" },
  { id: "c", topping: "jalapeno" },
  { id: "v", topping: "pineapple" },
];
export default function FruitBasket() {
  const [listedToppings, setListedToppings] = useState(pizzaToppings);

  function removeTopping(item) {
    setListedToppings(listedToppings.filter((topping) => topping !== item));
  }

  return (
    <ul>
      {listedToppings.map((item, index) => (
        <li key={item.id}>
          <label htmlFor={item.topping}>{item.topping}</label>
          <input type="text" name={item.topping} id={item.id} defaultValue={item.topping} />
          <button onClick={() => removeTopping(item)}>X</button>
        </li>
      ))}
    </ul>
  );
}
