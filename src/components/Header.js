import { Link } from "react-router-dom";
import "./Header.css"; // ✅ Import CSS for styling

function Header() {
  return (
    <header className="header">
      <h1>📚 Cypher's Book Review</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-book">Add Book</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
