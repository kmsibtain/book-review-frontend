import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./AddBook.css"; // ✅ Import the CSS file

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const addBook = () => {
    axios.post("http://localhost:3000/books", { title, author, description })
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Header />
      <div className="add-book-container">
        <h2>Add New Book</h2>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button onClick={addBook}>Add Book</button>
      </div>
    </div>
  );
}

export default AddBook;
