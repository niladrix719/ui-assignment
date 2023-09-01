'use client';
import { signIn } from "next-auth/react";
import React, { useRef } from "react";
import Image from 'next/image';
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc"
import Link from 'next/link'

export default function LogIn() {
  const email = useRef("");
  const password = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex justify-center items-center bg-[#F8FAFF] h-screen overflow-hidden" >

      <div className='z-10 w-1/2 h-screen flex flex-col justify-between p-12 relative'>
        <div className='h-[130vh] top-[-10vh] left-[-5vw] w-full absolute left-0 rotate-[9deg]' style={{background: 'linear-gradient(180deg, #4285F4 0%, #286DE0 100%)'}}></div>
        <div>
          <Link href='/' className='text-xl font-bold text-white z-10 relative'>LOGO</Link>
        </div>
        <div>
          <h1 className='text-7xl font-bold text-white z-10 relative px-40'>Board.</h1>
        </div>
        <div className='flex px-40 gap-8'>
          <Image src='/github.png' alt='github' height={30} width={40} className='z-10 relative w-auto' />
          <Image src='/twitter.png' alt='github' height={30} width={40} className='z-10 relative w-auto' />
          <Image src='/linkedin.png' alt='github' height={30} width={40} className='z-10 relative w-auto' />
          <Image src='/discord.png' alt='github' height={30} width={40} className='z-10 relative w-auto' />
        </div>
      </div>

      <div className='w-1/2 flex flex-col p-12 gap-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-5xl font-semibold'>SignIn</h1>
          <p>Sign in to your Account</p>
        </div>
        <div className='flex w-4/6 justify-evenly'>
          <div className='rounded-md p-2 bg-white w-[45%] flex items-center gap-2'>
            <FcGoogle className='text-[#858585]' /><span className='text-sm text-[#858585]'>Sign in with Google</span>
          </div>
          <div className='rounded-md p-2 bg-white w-[45%] flex items-center gap-2'>
            <AiFillApple className='text-[#858585]' /><span className='text-sm text-[#858585]'>Sign in with Apple</span>
          </div>
        </div>
        <div className="px-7 py-4 shadow bg-white rounded-lg flex flex-col w-4/6 gap-2">
          <label>Email address</label>
          <input
          onChange={(e) => (email.current = e.target.value)}
          className='border-2 bg-[#F5F5F5] p-2 rounded-md outline-none'
          />
          <label>Password</label>
          <input
          type={"password"}
          onChange={(e) => (password.current = e.target.value)}
          className='border-2 bg-[#F5F5F5] p-2 rounded-md outline-none'
          />
          <span className='text-[#346BD4]'>Forget password?</span>
          <button onClick={onSubmit} className='bg-[#4285F4] text-white p-2 rounded-md'>Login</button>
        </div>
        <div>
          <p className='text-[#858585]'>Don't have a account? <span className='text-[#346BD4] cursor-pointer'>Register here</span></p>
        </div>
      </div>
    </div>
  )
}
