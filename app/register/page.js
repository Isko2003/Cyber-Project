"use client";
import React, { useEffect, useState } from "react";
import "./register.css";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const isEmpty = Object.values(formData).some((value) => value === "");
    if (isEmpty || formData.password.length < 9) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields",
      });
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.some(
      (user) => user.email === formData.email
    );
    if (userExists) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "This email is already registered. Please use a different email.",
      });
      return;
    }

    storedUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    Swal.fire({
      title: "You Have Been Registered Successfully",
      icon: "success",
    }).then(() => {
      setFormData({
        firstname: "",
        email: "",
        password: "",
      });
      router.push("/login");
    });
  };

  return (
    <div id="register-container">
      <h1 id="register-title">Register Form</h1>

      <form id="register-form">
        <div className="form-group" id="name-group">
          <label htmlFor="firstname" className="form-label">
            Firstname
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
        <div className="form-group" id="email-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button
          id="register-btn"
          className="form-btn"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
