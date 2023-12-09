"use client"
import React from 'react'

function page() {
  return (
    <div className='w-screen h-screen  flex flex-col flex-shrink-0 justify-center items-center'>
        <h1 className='font-bold text-2xl'>Log In</h1>
        <input type="email"    className='text-black p-2 m-5 w-[30%] max-md:w-[80%] rounded-md' placeholder='Email...' name="" id="" />
        <input type="password" className='text-black p-2 m-5 w-[30%] max-md:w-[80%] rounded-md' placeholder='Password...' name="" id="" />
        <button className='p-2 bg-gradient-to-tr from-slate-300 to-yellow-600 w-[20%] min-w-[200px] bg-white rounded-md text-black'>Log-in</button>
    </div>
  )
}

export default page
