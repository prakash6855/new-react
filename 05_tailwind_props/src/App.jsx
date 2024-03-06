import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    userName: "Raju",
    age: 20
  }
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-cyan-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="my-Youtube-channel"  btnText="click here"/>
      <br/>
      <Card username="my-insta-channel" btnText="visit here"/>
    </>
  );
}

export default App;
