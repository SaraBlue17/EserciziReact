import React, { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + incrementAmount);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - incrementAmount);
  };

  const reset = () => {
    setCounter(initialValue);

    useEffect(()=> {
        console.log(`Current counter value: ${counter}`);
    },[counter])
  };

  return (
    <div>
      <CounterDisplay count={counter} />

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

