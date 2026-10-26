import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import RegisterForm from "../../components/auth/RegisterForm";
import AuthLayout from "../../layouts/AuthLayout";
import { registerUser } from "../../api/authApi";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const response = await registerUser(formData);
      toast.success(response.message || "Account created successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to create account");
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">Task Management</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Create your account</h1>
          <p className="mt-2 text-sm text-slate-500">Set up your workspace and start managing tasks.</p>
        </div>
        <RegisterForm onSubmit={handleSubmit} />
        <p className="mt-7 text-center text-sm text-slate-500">
          Already have an account?
          <Link to="/login" className="ml-1 font-semibold text-violet-700 hover:text-violet-800">
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
