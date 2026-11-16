import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Button Types</h1>
      <Button label="Add Book" variant="primary" />
      <Button label="Issue Book" variant="success" />
      <Button label="Delete Book" variant="danger" />
      <Button label="Cancel" variant="outline" />
    </div>
  );
}

export default App;