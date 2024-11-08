import { useNavigate } from "react-router-dom";
import { UserActionTypes, useUser, useUserDispatch } from "../UserContext";
import "./styles.css";
import { useEffect, useState } from "react";

export const Register = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useUserDispatch();
  const user = useUser();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = formData;
    try {
      if (!name || !email || !password) {
        throw Error("All fields are required!");
      }
      dispatch({
        type: UserActionTypes.Register,
        payload: formData,
        // payload: { email: setEmail, password: setPassword, name: setName },
      });

      navigate("/");
    } catch (error) {
      console.error("Hata:", error.message);

      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    if (user.isLoggedInUser) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="register-form">
        <h1>Register</h1>

        <label htmlFor="name">Name</label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" className="btn--success buton">
          Register
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </form>
  );
};
