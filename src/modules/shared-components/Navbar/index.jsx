import { Link } from "react-router-dom";
import "./styles.css";

export const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes/search">Search Recipes</Link>
        </li>

        <li>
          <Link to="/register"></Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>

        <li>
          <Link to="/recipes/create">Create New Recipe</Link>
        </li>
        <li>
          <Link to="/recipes/categories">Categories</Link>
        </li>

        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <button className="buton-bt">Logout</button>
        </li>
      </ul>
    </nav>
  );
};
