import { useState } from "react";
import "./App.css";
import MemoizedEx from "./MemoizedEx";
import PizzaToppings from "./PizzaToppings";
import Products from "./Products";

function Breaker() {}

function App() {
  return (
    <div className="App">
      {/* <PizzaToppings /> */}
      {/* <MemoizedEx /> */}
      <Products />
    </div>
  );
}

export default App;
