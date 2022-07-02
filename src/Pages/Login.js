import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="login-box">
        <h1>Login</h1>
        <form className="login-form" action="">
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </label>
          <div className="login-footer">
            <a href="/login"> Forgot password?</a>
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
