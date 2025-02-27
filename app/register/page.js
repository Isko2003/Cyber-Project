"use client";
import React, { useState } from "react";
import "./register.css";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.firstname ||
      !formData.email ||
      formData.password.length < 9
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields and ensure the password is at least 9 characters long!",
      });
      return;
    }
    
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    existingUsers.push(formData);

    localStorage.setItem("users", JSON.stringify(existingUsers));

    Swal.fire({
      title: "Registration Successful!",
      text: "You can now log in.",
      icon: "success",
    }).then(() => {
      router.push("/login");
    });
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div id="register-container">
      <h1 id="register-title">Registration Form</h1>

      <form id="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
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
