import { useState } from "react";
import "./styles.css";
import {
  loginUser,
  UserActionTypes,
  useUserDispatch,
} from "../../../UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useUserDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginUser(email, password)) {
      console.log("Giriş başarılı");
    } else {
      console.log("Giriş başarısız");
    }
    dispatch({
      type: UserActionTypes,
      payload: { email: email, password: password },
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn--success"
          onClick={() => {
            if (Login) {
              Navigate("/");
            }
          }}
        >
          Login
        </button>
        <div className="register">
          <p>If you haven't an account yet </p>
        </div>
        <button
          onClick={() => navigate("/register")}
          type="button"
          className="btn--success buton"
        >
          Register
        </button>
      </form>
    </div>
  );
};
