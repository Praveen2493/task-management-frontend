import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import toast from "react-hot-toast";
import validateEmail from "../../utils/validateEmail";

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      return toast.error("Email is required");
    }

    if (!validateEmail(formData.email)) {
      return toast.error("Invalid email format");
    }

    if (!formData.password.trim()) {
      return toast.error("Password is required");
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email"
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter Password"
      />

      <Button
        text="Login"
        type="submit"
      />
    </form>
  );
};

export default LoginForm;