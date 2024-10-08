import { Link } from "react-router-dom";
import "./styles.css";
import { Register } from "../../users/Register";

export const Navbar = () => {
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
          <Link to="/register"></Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/logout">Log out</Link>
        </li>
      </ul>
    </nav>
  );
};
