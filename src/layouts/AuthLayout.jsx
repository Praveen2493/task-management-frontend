import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='min-h-screen justify-center items-center bg-slate-100'>
        {children}
    </div>
  )
}

export default AuthLayout;
