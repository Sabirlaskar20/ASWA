import Button from "./components/ui/Button";

function App() {
  const handleSave = () => {
    alert("Book saved!");
  };

  const handleDelete = () => {
    alert("Book deleted!");
  };

  return (
    <div className="container">
      <h1>Library Management System</h1>
      <p>Reusable Button Demo</p>

      <div className="button-row">
        <Button onClick={handleSave}>Save Book</Button>
        <Button onClick={handleDelete}>Delete Book</Button>
        <Button onClick={() => alert("Welcome to the Library!")}>Say Hello</Button>
      </div>
    </div>
  );
}

export default App;