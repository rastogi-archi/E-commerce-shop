import React from 'react'
import { Link } from 'react-router-dom'

const LoginSignUp = () => {
  return (
    <Link to="/login">
      <div className='flex justify-center items-center bg-pink-200 h-80 mt-4'>
        <div className=' mt-5 flex flex-col justify-center items-start p-2'>
          <h2 className='font-semibold text-xl ml-3'>Login</h2>
          <div className='flex flex-col justify-center items-center'>
            <input type="email" placeholder='Email Address' className='border p-2 m-1 w-64 mt-5 sm:w-80 md:w-96' />
            <input type="password" placeholder='Password' className='border p-2 m-1 w-64 sm:w-80 md:w-96' />
            <button className='block bg-red-500 text-white w-64 p-2 m-2 sm:w-80 md:w-96'>Continue</button>
          </div>
          <p className='text-xs text-gray-600 text-start ml-2'>Create an account? <span className='text-red-500 cursor-pointer'>Click here</span></p>
          <div className='flex mt-2 ml-2'>
            <input type="checkbox" /> <p className='text-gray-600 text-[11px]'>By continuing,i agree to the terms of use&privacy policy</p>
          </div>
        </div>
      </div>
    </Link >
  )
}

export default LoginSignUp
