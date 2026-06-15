import { Link } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";
import AuthLayout from "../../layouts/AuthLayout";
import { registerUser } from "../../api/authApi";

const Register = () => {

const handleSubmit =
async(e)=>{

  e.preventDefault();

  const response =  await registerUser({

    name,
    email,
    password

  });

  navigate("/login");
};



  return (

    <AuthLayout>
      <div className="mt-20 w-100 mx-auto justify-center items-center bg-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Register Page
      </h1>

      <RegisterForm/>
      <p className="text-center mt-4">

        Already have an account?

        <Link
          to="/login"
          className="text-blue-600 ml-1"
        >
          Login
        </Link>

      </p>
    </div>
    </AuthLayout>
    
  );
};

export default Register;
