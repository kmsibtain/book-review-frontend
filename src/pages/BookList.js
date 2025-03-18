import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BookList.css";
import Header from "../components/Header";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <div className="book-list-container">
        <h2>Book List</h2>
        <Link to="/add-book" className="add-book-btn">Add New Book</Link>
        <div className="book-grid">
          {books.map(book => (
            <div className="book-card" key={book._id}> {/* ✅ Use a card instead of `li` */}
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <Link to={`/book/${book._id}`} className="details-btn">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BookList;
