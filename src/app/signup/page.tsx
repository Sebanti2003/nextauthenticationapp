"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const router=useRouter();
  const [butdis,setbutdis]=useState(true)
  type user = {
    username: string;
    password: string;
    email: string;
  };
  const obj: user = {
    username: "",
    password: "",
    email: "",
  };
  const [user, setuser] = useState(obj);
  const signup = async() => {
    try {
      setloading(true);
      const response=await axios.post('/api/users/signup',user);
      console.log(response.data);
      router.push('/login');
    } catch (error:any) {
      console.log("error happened",error.message);
      
    }finally{
      setloading(false);
    }
    
  };
  useEffect(()=>{
    if(user.email.length>1&&user.password.length>1&&user.username.length>1){
      setbutdis(false);
    }
  },[user])
  const [loading,setloading]=useState(false);

  return (
    <div className="w-screen h-screen  flex flex-col flex-shrink-0 justify-center items-center">
      <h1 className="font-bold text-2xl">Sign Up</h1>
      <input
        onChange={(e) => {
          setuser({ ...user, [e.target.id]: e.target.value });
        }}
        type="text"
        id="username"
        className="text-black p-2 m-5 w-[30%] max-md:w-[80%] rounded-md"
        placeholder="Name..."
      />
      <input
        onChange={(e) => {
          setuser({ ...user, [e.target.id]: e.target.value });
        }}
        type="email"
        id="email"
        className="text-black p-2 m-5 w-[30%] max-md:w-[80%] rounded-md"
        placeholder="Email..."
        name=""
      />
      <input
        onChange={(e) => {
          setuser({ ...user, [e.target.id]: e.target.value });
        }}
        type="password"
        id="password"
        className="text-black p-2 m-5 w-[30%] max-md:w-[80%] rounded-md"
        placeholder="Password..."
        name=""
      />
      <button disabled={butdis} onClick={signup} className="p-2 bg-gradient-to-tr from-slate-300 to-red-300 w-[20%] min-w-[200px] bg-white rounded-md text-black">
        {butdis?"No SignUp":"Sign Up"}
      </button>
    </div>
  );
};

export default page;
