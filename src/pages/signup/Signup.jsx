import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

const Signup = ({ onClose }) => {
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
        <h1 className="mb-8 text-4xl text-center text-white">Sign Up</h1>
        <div className="space-y-8">
          <input
            className="bg-[#333333] p-4 rounded-md w-full text-white"
            type="text"
            placeholder="Phone Number"
          />
            <input
            className="bg-[#333333] p-4 rounded-md w-full text-white"
            type="email"
            placeholder="Email"
          />
            <input
            className="bg-[#333333] p-4 rounded-md w-full text-white"
            type="text"
            placeholder="Name"
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
          <div className="relative">
            <input
              className="bg-[#333333] p-4 pr-10 rounded-md w-full text-white"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
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
            SignUp
          </button>
        </div>
        <div className="mt-6 text-center text-white">
          Already have an account? <span className="text-[#1DB954] cursor-pointer">Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
