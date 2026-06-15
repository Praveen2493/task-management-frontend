import React from 'react'


const Input = ({
    
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
}) => {
  return (
    <div className='mb-4'>
        <label className='block mb-2 font-medium'>{label}</label>

        <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300'
        />
    </div>
  )
}

export default Input;
