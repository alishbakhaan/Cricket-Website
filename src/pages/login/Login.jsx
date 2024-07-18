import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

const Login = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="top-[30rem] z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 mx-20">
      <div className="relative bg-black shadow-lg p-10 rounded-[3rem] w-full max-w-4xl">
        <button className="top-4 right-4 absolute text-2xl text-red-500" onClick={onClose}>
          <VscChromeClose />
        </button>
        <h1 className="mb-8 text-4xl text-center text-white">Sign In</h1>
        <div className="space-y-8">
          <input
            className="bg-[#333333] p-4 rounded-md w-full text-white"
            type="text"
            placeholder="Phone Number"
          />
          <div className="relative">
            <input
              className="bg-[#333333] p-4 pr-10 rounded-md w-full text-white"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className="right-0 absolute inset-y-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <IoEyeOff className="text-[#1DB954]" />
              ) : (
                <IoEye className="text-[#1DB954]" />
              )}
            </span>
          </div>
          <button className="bg-[#1DB954] p-4 rounded-md w-full text-white">
            Login
          </button>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-4 text-gray-400">or login with</span>
            <hr className="flex-grow border-gray-600" />
          </div>
          <button className="flex justify-center items-center border-[#888888] mb-4 p-4 border rounded-md w-full text-white">
            <FcGoogle className="mr-2 text-4xl" /> Sign in with Google
          </button>
          <button className="flex justify-center items-center border-[#888888] p-4 border rounded-md w-full text-white">
            <BsFacebook className="mr-2 text-3xl text-blue-500" /> Sign in with Facebook
          </button>
        </div>
        <div className="mt-6 text-center text-white">
          Don't have an account yet? <span className="text-[#1DB954] cursor-pointer">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Login;



