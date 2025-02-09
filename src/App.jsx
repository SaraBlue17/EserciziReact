import HelloWorld from "./HelloWorld";
import Welcome from "./Welcome";

const name = "Clara";
const age = 24;

export default function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <Welcome name={name} age={age} />
    </div>
  );
}
