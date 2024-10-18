import { Link } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";

export const Navbar = ({ isLoggedIn, onLogout }) => {
  const user = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes/search">Search Recipes</Link>
        </li>
        {!user.isLoggedIn && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        <li>
          <Link to="/register"></Link>
        </li>
        {user.isLoggedIn && (
          <li>
            <Link to="/recipes/create">Create New Recipe</Link>
          </li>
        )}
        <li>
          <Link to="/recipes/categories">Categories</Link>
        </li>
        {user.isLoggedIn && (
          <li>
            <Link to="/account">Account</Link>
          </li>
        )}
        {user.isLoggedIn && (
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        )}
        {!user.isLoggedIn && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user.isLoggedIn && (
          <li>
            <Link to="/login">Logout</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
