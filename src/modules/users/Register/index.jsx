import { useContext, useState } from "react";
import "./styles.css";
import { UserDispatchContext } from "../../../UserContext";
import { UserActionTypes } from "../../../UserContext";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useContext(UserDispatchContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: UserActionTypes.Register,
      payload: { email: email, password: password },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Register</h1>

      <form className="register-form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn--success">
          Register
        </button>
      </form>
    </form>
  );
};
