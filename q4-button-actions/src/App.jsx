import Button from "./components/Button";
import "./App.css";

function App() {
  const addBook = () => alert("Book added!");
  const issueBook = () => alert("Book issued!");
  const deleteBook = () => alert("Book deleted!");

  return (
    <div className="container">
      <h1>Library Actions</h1>
      <Button label="Add Book" variant="primary" onClick={addBook} />
      <Button label="Issue Book" variant="success" onClick={issueBook} />
      <Button label="Delete Book" variant="danger" onClick={deleteBook} />
    </div>
  );
}

export default App;