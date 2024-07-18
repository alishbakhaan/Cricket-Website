import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Logo from '../../assets/footerlogo.png'

const Footer = () => {
  return (
    <footer className="relative bg-[#1DB954] py-14 text-[#DDDDDD] footer">
            <div className='flex flex-col m-auto p-5 w-full max-w-[1200px] align-middle'>
                <div className="flex justify-center gap-4 md:gap-8 align-middle menuItems">
                   <img src={Logo} alt="" />
                </div>
                <div className='border-white my-12 border-t-4'></div>
                <div className="mb-5 md:mb-8 font-light text-center text-xs md:text-xl infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="flex justify-center gap-3 text-2xl text-white align-middle socialIcons">
                    <span className="flex justify-center w-[60px] h-[50px] cursor-pointer align-middle icon">
                        <FaFacebookF className='mt-5' />
                    </span>
                    <span className="flex justify-center w-[60px] h-[50px] cursor-pointer align-middle icon icon">
                        <FaInstagram className='mt-5'/>
                    </span>
                    <span className="flex justify-center w-[60px] h-[50px] cursor-pointer align-middle icon icon">
                        <FaTwitter className='mt-5'/>
                    </span>
                    <span className="flex justify-center w-[60px] h-[50px] cursor-pointer align-middle icon icon">
                        <FaLinkedin className='mt-5'/>
                    </span>
                </div>
            </div>
        </footer>
  )
}

export default Footer