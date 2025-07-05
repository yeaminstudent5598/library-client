import { Link } from "react-router-dom";
import { ModeToggle } from "./ui/moodToggler";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <h1 className="text-xl font-bold">📚 Library System</h1>
      <ul className="flex space-x-4">
        <li><Link to="/books">All Books</Link></li>
        <li><Link to="/create-book">Add Book</Link></li>
        <li><Link to="/books/borrow-summary">Borrow Summary</Link></li>
        <div className="ml-auto text-black">
        <ModeToggle  />
      </div>
      </ul>
    </nav>
  );
}
