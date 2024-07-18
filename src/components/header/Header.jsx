import { useState, React } from 'react';
import { useNavigate, useLocation,  Link  } from 'react-router-dom';
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/logo.png";
import '../../App.css';
import Login from '../../pages/login/Login';
import Signup from '../../pages/signup/Signup';

const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState("top");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false); 
  const location = useLocation();


  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  return (
    <header className={`${mobileMenu ? "mobileView hover:underline hover:underline-offset-8 hover:decoration-[#1DB954] transition-all cursor-pointer" : ""} ${show} header z-10 fixed top-0 flex backdrop-blur-md w-full h-24 transition-all ease-in translate-y-0 align-middle `}>
      <div className="flex flex-row justify-between m-auto p-5 w-[100%] max-w-[1200px] align-middle wrapper">
        <div className="cursor-pointer logo">
          <img className='h-16' src={logo} alt="" />
        </div>

        <ul className='md:flex hidden list-none align-middle menuItems'>
         <Link to="/"><li className='relative flex items-center mx-4 h-16 font-medium text-[#C7C7C7] hover:text-white hover:underline hover:underline-offset-8 hover:decoration-[#1DB954] transition-all cursor-pointer ease-in menuItem' onClick={() => navigationHandler("home")}>Home</li></Link> 
         <Link to="/credential"><li className='relative flex items-center mx-4 h-16 font-medium text-[#C7C7C7] hover:text-white hover:underline hover:underline-offset-8 hover:decoration-[#1DB954] transition-all cursor-pointer ease-in menuItem' onClick={() => navigationHandler("live")}>Live</li></Link> 
          <li className='relative flex items-center bg-transparent mx-4 h-16 font-medium text-white transition-all cursor-pointer ease-in menuItem'>
            <button className='border-white hover:bg-[#1DB954] px-4 py-2 border rounded-md' onClick={() => setShowSignUpModal(true)}>SignUp</button>
          </li>
          <li className='relative flex items-center bg-transparent mx-4 h-16 font-medium text-white transition-all cursor-pointer ease-in menuItem'>
            <button className='border-white hover:bg-[#1DB954] px-6 py-2 border rounded-md' onClick={() => setShowLoginModal(true)}>Login</button> 
          </li>
        </ul>

        <div className="flex gap-5 md:hidden align-middle mobilemenuitems">
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} className='text-[#C7C7C7] hover:text-white' />
          ) : (
            <SlMenu className='text-[#C7C7C7] hover:text-white' onClick={openMobileMenu} />
          )}
        </div>
      </div>

    
      {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />} 
      {showSignUpModal && <Signup onClose={() => setShowSignUpModal(false)} />} 

    </header>
  );
}

export default Header;
