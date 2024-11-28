"use client";
import React, { useEffect, useState } from "react";
import "./login.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Something went wrong");
        return;
      }

      const data = await response.json();
      setSuccess(data.message);

      localStorage.setItem("token", data.token);

      router.push("/");

    } catch (err) {
      setError("Network error, please try again");
    }
  };

  return (
    <div id="login-container">
      <h1 id="login-title">Login Form</h1>

      <form id="login-form" onSubmit={handleLogin}>
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
        <button type="submit" id="login-btn" className="form-btn">
          Login
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

export default Login;
