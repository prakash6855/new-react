import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;
  const addValue = () => {
    // counter=counter+1;
    if (counter >= 0 && counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0 && counter <= 20) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };
  return (
    <>
      <h1>code with react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value: {counter}</button>
      <p><b>footer: {counter}</b></p>
    </>
  );
}

export default App;
