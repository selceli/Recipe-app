import "./styles.css";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <div className="login-form-container">
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
