// src/ThankYou.js
import React from 'react';
import thankyou from '../../assets/thankyou.png'
const ThankYou = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-[#212121] p-10 h-screen text-white">
      <img src={thankyou} alt="" />
      <button className="bg-green-500 p-3 rounded-md w-[30rem] text-white">Thank you for Your Purchase</button>
        <p className="text-[#ACACAC]">Generate Recipt</p>
    </div>
  );
};

export default ThankYou;
