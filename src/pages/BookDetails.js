import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import "./BookDetails.css"; // ✅ Import CSS

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviewer, setReviewer] = useState(""); // ✅ New state for reviewer name
  const [review, setReview] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const addReview = () => {
    if (!reviewer || !review) {
      alert("Please enter your name and review!");
      return;
    }

    axios.post(`http://localhost:3000/books/${id}/review`, { reviewer, comment: review })
      .then(res => {
        setBook(res.data.book);
        setReviewer(""); // ✅ Clear input fields after submission
        setReview("");
      })
      .catch(err => console.error(err));
  };

  if (!book) return <h2>Loading...</h2>;

  return (
    <div>
      <Header />
      <div className="book-details-container">
        <h2>{book.title} <span>by {book.author}</span></h2>
        <p className="description"><strong>Description:</strong> {book.description}</p> {/* ✅ Show description */}
        
        <h3>Reviews:</h3>
        <ul className="reviews">
          {book.reviews.length > 0 ? (
            book.reviews.map((r, index) => (
              <li key={index}><strong>{r.reviewer}:</strong> {r.comment}</li>
            ))
          ) : (
            <p>Wow such empty! be first to write a review </p>
          )}
        </ul>

        <div className="review-form">
          <input type="text" placeholder="Your Name" value={reviewer} onChange={e => setReviewer(e.target.value)} />
          <textarea placeholder="Write a review..." value={review} onChange={e => setReview(e.target.value)} />
          <button onClick={addReview}>Add Review</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
