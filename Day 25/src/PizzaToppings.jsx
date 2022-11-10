import React, { useEffect, useState } from "react";

const pizzaToppings = [
  {
    id: "z",
    topping: "onion",
  },
  {
    id: "x",
    topping: "margherita",
  },
  {
    id: "c",
    topping: "jalapeno",
  },
  {
    id: "v",
    topping: "pineapple",
  },
];
// export default function PizzaToppings() {
//   const [toppings, setToppings] = useState(pizzaToppings);
//   function removeTopping(topping) {
//     setToppings(toppings.filter((i) => i !== topping));
//   }
//   return (
//     <ul>
//       {toppings.map((item, index) => (
//         <li key={item.id}>
//           <label htmlFor={item.topping}>{item.topping}</label>
//           <input type="text" name={item.topping} id={item.id} defaultValue={item.topping} />
//           <button onClick={() => removeTopping(item)}>X</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

function shuffle(originalArray) {
  const shuffledArray = [...originalArray];
  for (let index = shuffledArray.length - 1; index > 0; index--) {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledArray[index], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[index]];
  }
  return shuffledArray;
}

export default function PizzaToppings() {
  const [toppings, setToppings] = useState(pizzaToppings);
  function removeTopping(topping) {
    setToppings(toppings.filter((i) => i !== topping));
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setToppings(shuffle(toppings));
    }, 2000);

    return () => clearInterval(interval);
  });
  return (
    <ul>
      {toppings.map((item, index) => (
        <li key={item.id}>
          <input type="text" value={item.topping} />
        </li>
      ))}
    </ul>
  );
}
