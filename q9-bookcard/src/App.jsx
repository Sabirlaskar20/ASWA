import BookCard from "./components/BookCard";
import "./App.css";

const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", category: "Programming" },
  { id: 2, title: "Let Us C", author: "Yashavant Kanetkar", category: "Programming" },
  { id: 3, title: "Database System Concepts", author: "Abraham Silberschatz", category: "Databases" },
];

function App() {
  return (
    <div className="container">
      <h1>Library Books</h1>
      <div className="card-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;