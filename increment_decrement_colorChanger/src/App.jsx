import { useState } from "react";
import "./App.css";

function App() {
  const [cal, setCal] = useState(1);
  const [color, setColor] = useState("");

  const addVal = () => {
    setCal((preVal) => preVal + 1);
  };
  const subVal = () => {
    setCal(cal - 1);
  };
  const changeColor = () => {
    setColor("grey");
    document.body.style.backgroundColor = "grey"; 
  };
  return (
    <div
      className="w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <button onClick={addVal}>Incremented value: {cal}</button>
      <button onClick={subVal}>Decremented value: {cal}</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;
