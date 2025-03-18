import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
//npm start