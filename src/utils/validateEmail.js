import React from 'react'

const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
}

export default validateEmail;
