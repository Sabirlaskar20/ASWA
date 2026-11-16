function BookCard({ title, author, category }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default BookCard;