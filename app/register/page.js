"use client";
import React, { useEffect, useState } from "react";
import "./register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const userData = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Something went wrong");
        return;
      }

      const data = await response.json();
      setSuccess(data.message);
    } catch (err) {
      setError("Network error, please try again");
    }
  };

  return (
    <div id="register-container">
      <h1 id="register-title">Register Form</h1>

      <form id="register-form" onSubmit={handleSubmit}>
        <div className="form-group" id="name-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group" id="email-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group" id="password-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <button type="submit" id="register-btn" className="form-btn">
          Register
        </button>
      </form>

      {error && (
        <p id="error-message" className="form-message error">
          {error}
        </p>
      )}
      {success && (
        <p id="success-message" className="form-message success">
          {success}
        </p>
      )}
    </div>
  );
};

export default Register;
