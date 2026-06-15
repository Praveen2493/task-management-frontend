import React, { useState } from 'react'
import Input from '../common/Input';
import Button from '../common/Button';
import toast from 'react-hot-toast';
import validateEmail from '../../utils/validateEmail';

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    });


    const handleChange = (e) => {

        setFormData({
            ...formData, [e.target.name]:e.target.value,
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
          return toast.error("Name is Required");
        }

        if (!formData.email.trim()) {
          return toast.error("Email is Required");
        }

        if (!validateEmail(formData.email)) {
          return toast.error("Ivalid email format");
        }

        if (!formData.password.trim()) {
          return toast.error("password is Required");
        }

        if (formData.password !== formData.confirmPassword) {
          return toast.error("Password do not match");
        }

        console.log(formData);
    };



  return (
    <form onSubmit={handleChange}>
        <Input
         label="Full Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
        />

        <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter password"
      />

      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm password"
      />


        <Button text="Register" type='submit'/>
    </form>
  )
}

export default RegisterForm
