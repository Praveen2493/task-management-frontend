import React from 'react'

const Button = ({
    text,
    type="button",
    onClick
}) => {
  return (
    <button 
    type={type}
    onClick={onClick}
    className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>
        {text}
    </button>
  );
   
}

export default Button;
