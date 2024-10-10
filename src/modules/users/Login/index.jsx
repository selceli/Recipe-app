import { useContext, useState } from "react";
import "./styles.css";
import { UserDispatchContext } from "../../../UserContext";
import { UserActionTypes } from "../../../UserContext";
import { useNavigate } from "react-router-dom";

export const Login = (onLogin) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useContext(UserDispatchContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form gönderildi:", { email, password });

    if (typeof onLogin === "function") {
      const loginSuccessful = onLogin(email, password);
      console.log("Giriş :", loginSuccessful);
      navigate("/");
    } else {
      Error("Geçersiz kullanici adi veya şifre");
    }

    dispatch({
      type: UserActionTypes.Login,
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
        <button type="submit" className="btn--success">
          Login
        </button>
        <div className="register">
          <p>If you haven't an account yet </p>
        </div>
        <button
          onClick={() => navigate("/register")}
          type="submit"
          className="btn--success buton"
        >
          Register
        </button>
      </form>
    </div>
  );
};
