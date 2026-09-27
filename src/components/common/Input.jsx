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
    <div className="mb-4">
        <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>

        <input 
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
    </div>
  )
}

export default Input;
