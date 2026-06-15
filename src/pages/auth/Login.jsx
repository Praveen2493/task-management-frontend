import React from "react";
import { Link, useNavigate } from "react-router-dom";

import LoginForm from "../../components/auth/LoginForm";
import AuthLayout from "../../layouts/AuthLayout";

import { loginUser } from "../../api/authApi";

import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const response = await loginUser(formData);

      console.log("LOGIN RESPONSE:", response);

      localStorage.setItem(
        "token",
        response.token
      );

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      toast.error(
        error?.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <AuthLayout>
      <div className="mt-20 w-[400px] mx-auto bg-white p-6 rounded-lg shadow">

        <h1 className="text-4xl font-bold text-center mb-10">
          Login Page
        </h1>

        <LoginForm
          onSubmit={handleSubmit}
        />

        <p className="text-center mt-4">
          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-1"
          >
            Register
          </Link>
        </p>

      </div>
    </AuthLayout>
  );
};

export default Login;