import { Link, useNavigate } from "react-router-dom";

import LoginForm from "../../components/auth/LoginForm";
import AuthLayout from "../../layouts/AuthLayout";

import { loginUser } from "../../api/authApi";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (formData) => {
    try {
      const response = await loginUser(formData);

      login({ ...response.user, token: response.token });

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      toast.error(
        error?.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-10">
        <div className="mb-8 text-center">
          <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-xl font-bold text-white shadow-lg shadow-violet-200">
            T
          </span>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">Task Management</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to continue to your workspace.</p>
        </div>
        <LoginForm onSubmit={handleSubmit} />
        <p className="mt-7 text-center text-sm text-slate-500">
          Don&apos;t have an account?
          <Link to="/register" className="ml-1 font-semibold text-violet-700 hover:text-violet-800">
            Create one
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;