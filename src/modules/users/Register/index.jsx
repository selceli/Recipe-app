import { useContext, useState } from "react";
import "./styles.css";
import { UserDispatchContext } from "../../../UserContext";
import { UserActionTypes } from "../../../UserContext";
import { Navigate } from "react-router-dom";
import { Login } from "../Login";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

      <label htmlFor="name">Name</label>
      <input
        type="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <form className="register-form">
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
          onClick={() => {
            if (Login) {
              Navigate("/");
            }
          }}
          type="submit"
          className="btn--success buton"
        >
          Register
        </button>
      </form>
    </form>
  );
};
