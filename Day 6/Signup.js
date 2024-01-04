import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

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
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Store data in local storage
    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    // You may want to check if the email already exists in local storage before adding it
    // For simplicity, this example does not perform such a check

    localStorage.setItem('user', JSON.stringify(user));

    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    alert('Signup successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        <b>SIGN UP</b>
      </h1>
      <b>
        <label>
          <input
            type="text"
            name="firstName"
            placeholder="FIRST NAME"
            value={formData.firstName}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>

        <label>
          <input
            type="text"
            name="lastName"
            placeholder="LAST NAME"
            value={formData.lastName}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <label>
          <input
            type="text"
            name="email"
            placeholder="EMAIL ADDRESS"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </label>

        <br></br>
        <label>
          <input
            type="password"
            name="password"
            placeholder="SET PASSWORD"
            value={formData.password}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="RE-ENTER PASSWORD"
            value={formData.confirmPassword}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <br></br>
        <button type="submit">CLICK</button>
        <Link to="/login">Go to Login</Link>
      </b>
    </form>
  );
}

export default Signup;
