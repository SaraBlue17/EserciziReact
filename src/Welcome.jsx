import Age from "./Age";
import MessageAge from "./MessageAge";

export default function Welcome({ name, age }) {
  return (
    <div>
      <p className="welcome">
        Welcome, <strong>{name}!</strong>
      </p>
      <Age age={age} />
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && name === "John" && <Age age={age} />}
      <MessageAge age={age} />
    </div>
  );
}
