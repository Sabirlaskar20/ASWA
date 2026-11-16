import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Library Management System</h1>
      <Button label="Add Book" />
      <Button label="Issue Book" />
      <Button label="Return Book" />
    </div>
  );
}

export default App;