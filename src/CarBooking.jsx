import React from 'react';
import redcar from '../src/redcar.png'

const CarBooking = () => {
  return (
    <>
      <div className="bg-[#F6F7F9] flex flex-col justify-center items-center mt-12">
        <div className="flex gap-32 my-6 ">
          <h1 className='text[#90A3BF] font-semibold text-base '>Conformation</h1>
          <h1 className='text[#90A3BF] font-semibold text-base '>View All</h1>
        </div>
        <div className="flex flex-col  items-center w-[60%] p-12 bg-[#FFFFFF] rounded-sm">
          <div className="flex flex-col justify-center items-center w-[70%] rounded-sm p-14 border border-black">
            <img className='w-[30%]' src={redcar} alt="" />
            <h1 className='text-[#333333] font-bold text-[40px] '>Booking is Proceded</h1>
          </div>

          <div className="flex justify-center items-center gap-12 mt-12 mb-20 ">
            <button className='bg-[#FF5C00] text-white font-semibold text-base font-["Plus_Jakarta_Sans"] w-29 h-11 rounded-sm cursor-pointer'>Go Back</button>
            <button className='bg-[#FF5C00] text-white font-semibold text-base font-["Plus_Jakarta_Sans"] w-29 h-11 rounded-sm cursor-pointer'>View Booking</button>

          </div>
        </div>

      </div>
    </>
  );
}

export default CarBooking;
