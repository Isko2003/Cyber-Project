"use client";
import React, { useEffect, useState } from "react";
import "./login.css";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      Swal.fire({
        icon: "success",
        title: "Login Successfull!",
      }).then(() => {
        setEmail(""), setPassword("");
        router.push("/");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password.",
      });
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
            name="email"
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
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <button id="login-btn" className="form-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
