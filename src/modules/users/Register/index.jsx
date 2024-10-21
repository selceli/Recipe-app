import { useNavigate } from "react-router-dom";
import {
  UserActionTypes,
  useUser,
  useUserDispatch,
} from "../../../UserContext";
import "./styles.css";
import { useEffect, useState } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useUserDispatch();
  const user = useUser();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: UserActionTypes.Register,
      payload: { email: email, password: password },
    });
  };

  useEffect(() => {
    if (user.isLoggedInUser) {
      navigate("/");
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit} className="form register-form">
      <h1>Register</h1>

      <label htmlFor="name">Name</label>
      <input
        type="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="passwordpassword">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="btn--success buton">
        Register
      </button>
    </form>
  );
};
