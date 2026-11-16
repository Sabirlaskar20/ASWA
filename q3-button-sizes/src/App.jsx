import Button from "./components/Button";
import "./App.css";

function App() {
  const handleClick = (label) => {
    alert("Button clicked!");
  };
  const handleClick2 = (label) => {
    alert(`Button clicked: ${label}`);
  };
  return (
    <div className="container">
      <h1>Button Sizes</h1>
      <Button label="Small" size="small" onClick={() => handleClick2("Small")} />
      <Button label="Medium" size="medium" variant="success" onClick={() => handleClick2("Medium")} />
      <Button label="Large" size="large" variant="danger" onClick={() => handleClick2("Large")} />
      <Button label="Default" onClick={() => handleClick("Default")} />
    </div>
  );
}

export default App;