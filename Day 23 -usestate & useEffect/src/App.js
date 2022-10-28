import './App.css';
import { useState } from "react";
import Counter from './counter';
import List from './list';
import UseEffectExample from './useeffect-example';
import Products from './Products';
function App() {
  let localVariable = "abc";
  const [text, setText] = useState("devsnest");
  console.log("initial value of local variable",
    { localVariable })

  console.log("app component rendered");
  const handleChange = (event) => {
    localVariable = event.target.value;
    setText(event.target.value);
    // triggers a rerender 
    // it updates the state variable
    console.log({ localVariable })
    console.log("updated value of text ");
  }
  return (
    // <div className="App">
    //   <input type="text" name="content" id="content" onChange={handleChange} />
    //   {text}
    // </div>
    // <Counter />
    // <List />
    // <UseEffectExample />
    <Products />
  );
}

export default App;
