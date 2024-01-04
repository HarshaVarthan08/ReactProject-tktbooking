import React, { useState } from "react";
import { Link } from "react-router-dom";



export function Login() {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.usernameOrEmail || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    // Retrieve user credentials from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedUsernameOrEmail = storedUser.email;
    const storedPassword = storedUser.password;

    if (!storedUsernameOrEmail || !storedPassword) {
      alert("User not found. Please sign up.");
      return;
    }

    // Validate entered credentials
    if (
      formData.usernameOrEmail === storedUsernameOrEmail &&
      formData.password === storedPassword
    ) {
      alert("Login successful!");
      setLoginSuccess(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }

    // Reset form after submission
    setFormData({
      usernameOrEmail: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        <b>LOGIN</b>
      </h1>

      <br></br>
      <label>
        <input
          type="text"
          name="usernameOrEmail"
          placeholder="USER NAME/EMAIL ADDRESS"
          value={formData.usernameOrEmail}
          onChange={handleChange}
          required
        ></input>
      </label>
      <br></br>

      <label>
        <input
          type="password"
          name="password"
          placeholder="PASSWORD"
          value={formData.password}
          onChange={handleChange}
        ></input>
      </label>
      <br></br>
      <br></br>
      <a href="" style={{ textDecoration: "none" }}>
        FORGOT PASSWORD
      </a>

      <br></br>
      <button type="submit">CLICK</button>

      {loginSuccess ? (
        <Link to="/">Go to Home</Link>
      ) : (
        <Link to="/">Go Back</Link>
      )}
    </form>
  );
}

export default Login;
