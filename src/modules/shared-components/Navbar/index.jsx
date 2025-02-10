import { Link } from "react-router-dom";
import "./styles.css";
import { useUser } from "../../users/UserContext";

export const Navbar = () => {
  const user = useUser();

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
        {user.userLoggedIn && (
          <li>
            <Link to="/recipes/create">Create New Recipe</Link>
          </li>
        )}
        <li>
          <Link to="/recipes/categories">Categories</Link>
        </li>
        {user.userLoggedIn && (
          <li>
            <Link to="/account">Account</Link>
          </li>
        )}
        {user.userLoggedIn && (
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        )}
        {!user.userLoggedIn && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user.userLoggedIn && (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
