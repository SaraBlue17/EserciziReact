import React from "react";
import HelloWorld from "./HelloWorld";
import Welcome from "./Welcome";
import AlertClock from "./AlertClock";
import Counter from "./Counter";
import Clock from "./Clock";

const name = "Clara";
const age = 24;

export default function App() {
  function handleButtonClick() {
    const now = new Date();

    alert(`The current time is ${now.toLocaleTimeString()}`);
  }
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <Welcome name={name} age={age} />
      <AlertClock onClick={handleButtonClick} />
      <Counter initialValue={0} incrementAmount={1} />
      <Clock/>
    </div>
  );
}
