import HelloWorld from "./HelloWorld";
import Welcome from "./Welcome";
import AlertClock from "./AlertClock";

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
    </div>
  );
}
