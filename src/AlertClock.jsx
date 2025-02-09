export default function AlertClock({onClick}) {
  return (
    <div>
      <p>Click the button to show the current time</p>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}
