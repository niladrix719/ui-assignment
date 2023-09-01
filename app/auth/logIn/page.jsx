'use client';
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

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
    <div className="flex justify-center items-center h-screen gap-1 overflow-hidden" >

      <div className='z-10 w-1/2 h-screen flex flex-col justify-between p-12 relative'>
      <div className='h-[130vh] top-[-10vh] left-[-5vw] w-full absolute left-0 rotate-[9deg]' style={{background: 'linear-gradient(180deg, #4285F4 0%, #286DE0 100%)'}}></div>
        <div>
          <p className='text-xl font-bold text-white z-10 relative'>LOGO</p>
        </div>
        <div>
          <h1 className='text-7xl font-bold text-white z-10 relative px-40'>Board.</h1>
        </div>
        <div>
          <h1 className='text-7xl font-bold text-white z-10 relative'>Board.</h1>
        </div>
      </div>

      <div className='w-1/2 flex flex-col'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-5xl font-semibold'>SignIn</h1>
          <p>Sign in to your Account</p>
        </div>
        <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
          <input
          onChange={(e) => (email.current = e.target.value)}
          className='border-2'
          />
          <input
          type={"password"}
          onChange={(e) => (password.current = e.target.value)}
          className='border-2'
          />
          <button onClick={onSubmit}>Login</button>
        </div>
      </div>
    </div>
  )
}
