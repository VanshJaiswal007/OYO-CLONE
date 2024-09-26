"use client"
import React, { useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';


const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Login, setLogin] = useState(false);

  const router = useRouter();

  const handlesignUp = async() => {
    const res = await axios.post("/api/users/register",{name,email,password});
    if(res?.data){
      Cookies.set('user',res.data.token,{expires:7});
      alert(res.data.msg);
      router.back();
    }
  }
  const handleLogin = async() => {
      const res = await axios.post("/api/users/login",{email,password});
      if(res?.data){
        Cookies.set('user',res.data.token,{expires:7});
        alert(res.data.msg)
        router.back();
      }
  }

  const handleToggle = ()=> {
    setLogin(!Login);
  }


  return (
    <div>
      <head>
        <title>OYO LOGIN</title>
      </head>
      <div className='flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85'>
        <div className='absolute top-10 px-20 flex items-center '>
          <h2 className='text-5xl font-bold mr-5 text-white'>OYO</h2>
          <p className='font-bold text-2xl text-white'>Hotels and homes across 800 cities , 24+ countries</p>
        </div>
        <div className='flex justify-center items-center w-9/12'>
          <div className='text-white'>
            <p className='font-bold text-5xl text-justify'>There's a smarter way to OYO around</p>
            <p className='text-2xl'>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners .</p>
          </div>
          <div className='ml-20 w-10/12 border-2 h-104 text-justify bg-slate-50'>
            <p className='h-10 flex items-center px-10 bg-gradient-to-r from-red-300 to bg-red-600 text-lg font-bold text-white'>Sign up & Get 500 OYO Money</p>
            <div className='px-10'>
              <h3 className='text-5xl font-bold my-5'>Login / Signup</h3>
              <p className='font-bold text-lg mb-1'>Please enter your phone number to continue</p>
              {Login ? "" : (<input type="text" placeholder='Enter your name...' className='outline-none border border-black px-3 py-1 w-96 h-10 my-3' onChange={(e) => setName(e.target.value)} />
              )}
              <input type="email" placeholder='Enter your email...' className='outline-none border border-black px-3 py-1 w-96 h-10 my-3' onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='Enter your password...' className='outline-none border border-black px-3 py-1 w-96 h-10 my-3' onChange={(e) => setPassword(e.target.value)} />
              <button type='submit' onClick={Login?handleLogin:handlesignUp} className='w-96 h-14 text-lg font-bold bg-red-400 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg'>{Login?"Login":"Sign up"}</button>
              <p className='my-1 text-xl'>
                <span>{Login?"Don't have an account ? ":"Already have an account ?"}</span>
                <span onClick={handleToggle} className='ml-3 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer'>{Login?"Sign Up":"Login"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login