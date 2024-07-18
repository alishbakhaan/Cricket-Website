import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import payment from '../../assets/payment.png';
import '../../App.css';

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/thankyou');
  };

  const renderPaymentOptions = () => {
    switch (selectedPaymentMethod) {
      case 'card':
        return (
          <>
            <div className="mb-4">
              <label className="block mb-2">Card Number</label>
              <input type="text" className="border-gray-600 bg-transparent p-3 border rounded-md w-full text-[#ACACAC]" placeholder="1234 5678 9101 1121" />
            </div>
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block mb-2">Expiration Date</label>
                <input type="text" className="border-gray-600 bg-transparent p-3 border rounded-md w-full text-[#ACACAC]" placeholder="MM/YY" />
              </div>
              <div className="w-1/2">
                <label className="block mb-2">CVV</label>
                <input type="text" className="border-gray-600 bg-transparent p-3 border rounded-md w-full text-[#ACACAC]" placeholder="123" />
              </div>
            </div>
          </>
        );
      case 'bank':
        return (
          <div className="mb-4">
            <label className="block mb-2">Select Bank</label>
            <select className="border-gray-600 bg-transparent p-3 border rounded-md w-full text-[#ACACAC]">
              <option className='bg-[#535353] text-[#ACACAC]' value="bank1">Access Bank</option>
              <option className='bg-[#535353] text-[#ACACAC]' value="bank2">United Bank for Africa (UBA)</option>
              <option className='bg-[#535353] text-[#ACACAC]' value="bank3">Keystone Bank</option>
              <option className='bg-[#535353] text-[#ACACAC]' value="bank4">Sterling Bank</option>
              <option className='bg-[#535353] text-[#ACACAC]' value="bank5">Zenith Bank</option>
              <option className='bg-[#535353] text-[#ACACAC]' value="bank6">Union Bank</option>
              <option className='bg-[#535353] text-[#ACACAC]' value="bank7">Kuda Microfinance Bank</option>
              <option className='bg-[#535353] text-[#ACACAC]' value="bank8">First Bank</option>
            </select>
          </div>
        );
      case 'jazzcash':
        return (
          <div className="mb-4">
            <label className="block mb-2">Enter Your JazzCash Mobile Number</label>
            <input type="text" className="border-gray-600 bg-transparent p-3 border rounded-md w-full text-[#ACACAC]" placeholder="0123456789" />
          </div>
        );
      case 'easypaisa':
        return (
          <div className="mb-4">
            <label className="block mb-2">EasyPaisa Number</label>
            <input type="text" className="border-gray-600 bg-transparent p-3 border rounded-md w-full text-[#ACACAC]" placeholder="e.x.[0123456789]" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#272727] p-6 min-h-screen text-white">
      <div className="flex md:flex-row flex-col justify-center items-stretch shadow-2xl rounded-[3rem] w-full max-w-7xl md:h-[800px]">
        <div className="flex flex-col justify-between space-y-5 border-white bg-[#212121] p-10 md:border-r rounded-t-[3rem] md:rounded-l-[3rem] md:rounded-tr-none w-full md:w-1/2 h-full">
          <h2 className="text-2xl">Payment</h2>
          <hr className="border-gray-600" />
          <div className="">
            <label className="block">Pay With:</label>
            <div className="flex gap-4">
              <label className="flex items-center text-[#ACACAC]">
                <input
                  type="radio"
                  name="payment-method"
                  value="card"
                  className="hidden"
                  checked={selectedPaymentMethod === 'card'}
                  onChange={() => setSelectedPaymentMethod('card')}
                />
                <span className="custom-radio mr-2"></span>
                Card
              </label>
              <label className="flex items-center text-[#ACACAC]">
                <input
                  type="radio"
                  name="payment-method"
                  value="bank"
                  className="hidden"
                  checked={selectedPaymentMethod === 'bank'}
                  onChange={() => setSelectedPaymentMethod('bank')}
                />
                <span className="custom-radio mr-2"></span>
                Bank
              </label>
              <label className="flex items-center text-[#ACACAC]">
                <input
                  type="radio"
                  name="payment-method"
                  value="jazzcash"
                  className="hidden"
                  checked={selectedPaymentMethod === 'jazzcash'}
                  onChange={() => setSelectedPaymentMethod('jazzcash')}
                />
                <span className="custom-radio mr-2"></span>
                JazzCash
              </label>
              <label className="flex items-center text-[#ACACAC]">
                <input
                  type="radio"
                  name="payment-method"
                  value="easypaisa"
                  className="hidden"
                  checked={selectedPaymentMethod === 'easypaisa'}
                  onChange={() => setSelectedPaymentMethod('easypaisa')}
                />
                <span className="custom-radio mr-2"></span>
                EasyPaisa
              </label>
            </div>
          </div>
          {renderPaymentOptions()}
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="save-card" />
            <label htmlFor="save-card" className='flex items-center text-[#ACACAC]'>
              <span className="custom-checkbox mr-2"></span>
              Save card details
            </label>
          </div>
          <button className="bg-green-500 p-3 rounded-md w-full text-white" onClick={handlePayment}>Pay USD$12.94</button>
          <p className="text-[#ACACAC] text-sm">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
          </p>
        </div>

        <div className="flex flex-col justify-between bg-[#1a1818] p-10 rounded-b-[3rem] md:rounded-r-[3rem] md:rounded-bl-none w-full md:w-1/2 h-full">
          <div className="flex justify-end mb-6"><img src={logo} alt="Logo" className="h-24" /></div>
          <div className="space-y-10 bg-[#1a1818] p-10">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl">Order Summary</h2>
            </div>
            <hr className="border-gray-600" />
            <div className="flex items-center">
              <img src={payment} alt="" className='mr-4' />
              <p className="text-lg">One Month Member Subscription</p>
              <p className="ml-11 text-green-500">$10.80</p>
            </div>
            <hr className="border-gray-600" />
            <div className="flex gap-8">
              <input type="text" className="border-gray-600 bg-[#535353] p-3 border rounded-md w-full text-[#ACACAC]" placeholder="Gift or discount code" />
              <button className="bg-[#ACACAC] p-3 rounded-md w-[150px] text-black">Apply</button>
            </div>
            <hr className="border-gray-600" />
            <div className="flex justify-between items-center">
              <p>Total</p>
              <p className="text-2xl">$12.94</p>
            </div>
            <p className="mt-2 text-[#ACACAC] text-sm">Including $0.14 in taxes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
