import React from 'react';
import hondacar from '../src/hondacar.png'

const CategoryCarRent = () => {
  return (
    <>
      <div className="flex mt-7">
        <div className="flex flex-col bg-[#FFFFFF] my-6 pl-6 w-[21%]">
          <h1 className='text-[#94A7CB66] font-semibold text-xs font-["Plus_Jakarta_Sans"]'>TYPE</h1>
          <div className="flex flex-col gap-4  py-2.5  w-[70%] rounded-sm mt-6 mb-14">
            <label className='flex justify-center items-center gap-2 text-[#94A7CB66] font-semibold' htmlFor="">
              <input className='border border-gray-300 w-6 h-6 rounded-sm' type="check" />
              Mehran (16)
            </label>
            <label className='flex justify-center items-center gap-2 text-[#94A7CB66] font-semibold' htmlFor="">
              <input className='border border-gray-300 w-6 h-6 rounded-sm' type="check" />
              Premio (20)
            </label>
            <label className='flex justify-center items-center gap-2 text-[#94A7CB66] font-semibold' htmlFor="">
              <input className='border border-gray-300 w-6 h-6 rounded-sm' type="check" />
              Xli car (14)
            </label>
            <label className='flex justify-center items-center gap-2 text-[#94A7CB66] font-semibold' htmlFor="">
              <input className='border border-gray-300 w-6 h-6 rounded-sm' type="check" />
              Tz prado (14)
            </label>
          </div>



          <div className="flex flex-col gap-4 mt-20">
            <h1 className='text-[#94A7CB66] font-semibold text-xs font-["Plus_Jakarta_Sans"]'>PRICE</h1>
            <div className="flex flex-col gap-2">
              <input className='accent-orange-500' type="range" />

              <h1 className='text-[#90A3BF] text-base font-medium font-["Plus_Jakarta_Sans"]'>Max. 72.00</h1>
            </div>

          </div>
        </div>

        <div className="flex-1 bg-[#F6F7F9] ">
          <div className="flex justify-between px-14 py-7">
            <h1 className='text-[#90A3BF] font-semibold text-base font-["Plus_Jakarta_Sans"]'>Available Cars</h1>
            <h1 className='text-[#90A3BF] font-semibold text-base font-["Plus_Jakarta_Sans"]'>View All</h1>

          </div>
          <div className="flex flex-wrap gap-7 mb-12 ml-14">
            <button className='bg-[#FFFFFF] border border-[#9C9090] w-33 h-11 cursor-pointer'>All</button>
            <button className='bg-[#FFFFFF] border border-[#9C9090] w-33 h-11 cursor-pointer'>Petrol</button>
            <button className='bg-[#FFFFFF] border border-[#9C9090] w-33 h-11 cursor-pointer'>Desel</button>
            <button className='bg-[#FFFFFF] border border-[#9C9090] w-33 h-11 cursor-pointer'>CNG</button>

          </div>
          <div className="flex gap-6  ml-14 mb-7 flex-wrap">
            <div className="flex flex-col p-3 gap-3 bg-[#FFFFFF] w-76 h-auto rounded-xl">
              <div className="flex justify-around items-center ">
                <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>Nissan GT - R</h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <img className='' src={hondacar} alt="" />
              <div className="flex flex-between gap-1">
                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="#90A3BF" />
                  </svg>
                  Milage</p>
                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z" fill="#90A3BF" />
                    <rect x="4" y="4" width="16" height="16" rx="8" fill="white" />
                    <path d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z" fill="#90A3BF" />
                    <rect x="8" y="8" width="8" height="8" rx="4" fill="white" />
                    <rect x="11" y="17" width="2" height="4" fill="#90A3BF" />
                    <rect x="17" y="11" width="4" height="2" fill="#90A3BF" />
                    <rect x="3" y="11" width="4" height="2" fill="#90A3BF" />
                  </svg>
                  Manual</p>

                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="#90A3BF" />
                    <path d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z" fill="#90A3BF" />
                    <path d="M19.9901 7.3401C20.1501 9.2801 18.7701 10.9801 16.8601 11.2101C16.8501 11.2101 16.8501 11.2101 16.8401 11.2101H16.8101C16.7501 11.2101 16.6901 11.2101 16.6401 11.2301C15.6701 11.2801 14.7801 10.9701 14.1101 10.4001C15.1401 9.4801 15.7301 8.1001 15.6101 6.6001C15.5401 5.7901 15.2601 5.0501 14.8401 4.4201C15.2201 4.2301 15.6601 4.1101 16.1101 4.0701C18.0701 3.9001 19.8201 5.3601 19.9901 7.3401Z" fill="#90A3BF" />
                    <path d="M21.99 16.5899C21.91 17.5599 21.29 18.3999 20.25 18.9699C19.25 19.5199 17.99 19.7799 16.74 19.7499C17.46 19.0999 17.88 18.2899 17.96 17.4299C18.06 16.1899 17.47 14.9999 16.29 14.0499C15.62 13.5199 14.84 13.0999 13.99 12.7899C16.2 12.1499 18.98 12.5799 20.69 13.9599C21.61 14.6999 22.08 15.6299 21.99 16.5899Z" fill="#90A3BF" />
                  </svg>
                  With Diver</p>
              </div>

              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>33,000/ <span className='text-[#90A3BF] text-sm'>day</span></h1>
                  <p className='text-[#90A3BF] text-sm '>35,000</p>

                </div>
                <button className='bg-[#FF5C00] text-white font-semibold text-base flex justify-center items-center rounded-sm p-2'>Rent Now</button>


              </div>
            </div>

            {/* 2nd card */}
            <div className="flex flex-col p-3 gap-3 bg-[#FFFFFF] w-76 h-auto rounded-xl">
              <div className="flex justify-around items-center ">
                <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>Nissan GT - R</h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <img className='' src={hondacar} alt="" />
              <div className="flex flex-between gap-1">
                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="#90A3BF" />
                  </svg>
                  Milage</p>
                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z" fill="#90A3BF" />
                    <rect x="4" y="4" width="16" height="16" rx="8" fill="white" />
                    <path d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z" fill="#90A3BF" />
                    <rect x="8" y="8" width="8" height="8" rx="4" fill="white" />
                    <rect x="11" y="17" width="2" height="4" fill="#90A3BF" />
                    <rect x="17" y="11" width="4" height="2" fill="#90A3BF" />
                    <rect x="3" y="11" width="4" height="2" fill="#90A3BF" />
                  </svg>
                  Manual</p>

                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="#90A3BF" />
                    <path d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z" fill="#90A3BF" />
                    <path d="M19.9901 7.3401C20.1501 9.2801 18.7701 10.9801 16.8601 11.2101C16.8501 11.2101 16.8501 11.2101 16.8401 11.2101H16.8101C16.7501 11.2101 16.6901 11.2101 16.6401 11.2301C15.6701 11.2801 14.7801 10.9701 14.1101 10.4001C15.1401 9.4801 15.7301 8.1001 15.6101 6.6001C15.5401 5.7901 15.2601 5.0501 14.8401 4.4201C15.2201 4.2301 15.6601 4.1101 16.1101 4.0701C18.0701 3.9001 19.8201 5.3601 19.9901 7.3401Z" fill="#90A3BF" />
                    <path d="M21.99 16.5899C21.91 17.5599 21.29 18.3999 20.25 18.9699C19.25 19.5199 17.99 19.7799 16.74 19.7499C17.46 19.0999 17.88 18.2899 17.96 17.4299C18.06 16.1899 17.47 14.9999 16.29 14.0499C15.62 13.5199 14.84 13.0999 13.99 12.7899C16.2 12.1499 18.98 12.5799 20.69 13.9599C21.61 14.6999 22.08 15.6299 21.99 16.5899Z" fill="#90A3BF" />
                  </svg>
                  With Diver</p>
              </div>

              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>33,000/ <span className='text-[#90A3BF] text-sm'>day</span></h1>
                  <p className='text-[#90A3BF] text-sm '>35,000</p>

                </div>
                <button className='bg-[#FF5C00] text-white font-semibold text-base flex justify-center items-center rounded-sm p-2'>Rent Now</button>


              </div>
            </div>

            {/* 3rd Card */}
            <div className="flex flex-col p-3 gap-3 bg-[#FFFFFF] w-76 h-auto rounded-xl">
              <div className="flex justify-around items-center ">
                <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>Nissan GT - R</h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <img className='' src={hondacar} alt="" />
              <div className="flex flex-between gap-1">
                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="#90A3BF" />
                  </svg>
                  Milage</p>
                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z" fill="#90A3BF" />
                    <rect x="4" y="4" width="16" height="16" rx="8" fill="white" />
                    <path d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z" fill="#90A3BF" />
                    <rect x="8" y="8" width="8" height="8" rx="4" fill="white" />
                    <rect x="11" y="17" width="2" height="4" fill="#90A3BF" />
                    <rect x="17" y="11" width="4" height="2" fill="#90A3BF" />
                    <rect x="3" y="11" width="4" height="2" fill="#90A3BF" />
                  </svg>
                  Manual</p>

                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="#90A3BF" />
                    <path d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z" fill="#90A3BF" />
                    <path d="M19.9901 7.3401C20.1501 9.2801 18.7701 10.9801 16.8601 11.2101C16.8501 11.2101 16.8501 11.2101 16.8401 11.2101H16.8101C16.7501 11.2101 16.6901 11.2101 16.6401 11.2301C15.6701 11.2801 14.7801 10.9701 14.1101 10.4001C15.1401 9.4801 15.7301 8.1001 15.6101 6.6001C15.5401 5.7901 15.2601 5.0501 14.8401 4.4201C15.2201 4.2301 15.6601 4.1101 16.1101 4.0701C18.0701 3.9001 19.8201 5.3601 19.9901 7.3401Z" fill="#90A3BF" />
                    <path d="M21.99 16.5899C21.91 17.5599 21.29 18.3999 20.25 18.9699C19.25 19.5199 17.99 19.7799 16.74 19.7499C17.46 19.0999 17.88 18.2899 17.96 17.4299C18.06 16.1899 17.47 14.9999 16.29 14.0499C15.62 13.5199 14.84 13.0999 13.99 12.7899C16.2 12.1499 18.98 12.5799 20.69 13.9599C21.61 14.6999 22.08 15.6299 21.99 16.5899Z" fill="#90A3BF" />
                  </svg>
                  With Diver</p>
              </div>

              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>33,000/ <span className='text-[#90A3BF] text-sm'>day</span></h1>
                  <p className='text-[#90A3BF] text-sm '>35,000</p>

                </div>
                <button className='bg-[#FF5C00] text-white font-semibold text-base flex justify-center items-center rounded-sm p-2'>Rent Now</button>


              </div>
            </div>
            {/* 4th Card */}
            <div className="flex flex-col p-3 gap-3 bg-[#FFFFFF] w-76 h-auto rounded-xl">
              <div className="flex justify-around items-center ">
                <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>Nissan GT - R</h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <img className='' src={hondacar} alt="" />
              <div className="flex flex-between gap-1">
                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="#90A3BF" />
                  </svg>
                  Milage</p>
                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z" fill="#90A3BF" />
                    <rect x="4" y="4" width="16" height="16" rx="8" fill="white" />
                    <path d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z" fill="#90A3BF" />
                    <rect x="8" y="8" width="8" height="8" rx="4" fill="white" />
                    <rect x="11" y="17" width="2" height="4" fill="#90A3BF" />
                    <rect x="17" y="11" width="4" height="2" fill="#90A3BF" />
                    <rect x="3" y="11" width="4" height="2" fill="#90A3BF" />
                  </svg>
                  Manual</p>

                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="#90A3BF" />
                    <path d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z" fill="#90A3BF" />
                    <path d="M19.9901 7.3401C20.1501 9.2801 18.7701 10.9801 16.8601 11.2101C16.8501 11.2101 16.8501 11.2101 16.8401 11.2101H16.8101C16.7501 11.2101 16.6901 11.2101 16.6401 11.2301C15.6701 11.2801 14.7801 10.9701 14.1101 10.4001C15.1401 9.4801 15.7301 8.1001 15.6101 6.6001C15.5401 5.7901 15.2601 5.0501 14.8401 4.4201C15.2201 4.2301 15.6601 4.1101 16.1101 4.0701C18.0701 3.9001 19.8201 5.3601 19.9901 7.3401Z" fill="#90A3BF" />
                    <path d="M21.99 16.5899C21.91 17.5599 21.29 18.3999 20.25 18.9699C19.25 19.5199 17.99 19.7799 16.74 19.7499C17.46 19.0999 17.88 18.2899 17.96 17.4299C18.06 16.1899 17.47 14.9999 16.29 14.0499C15.62 13.5199 14.84 13.0999 13.99 12.7899C16.2 12.1499 18.98 12.5799 20.69 13.9599C21.61 14.6999 22.08 15.6299 21.99 16.5899Z" fill="#90A3BF" />
                  </svg>
                  With Diver</p>
              </div>

              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>33,000/ <span className='text-[#90A3BF] text-sm'>day</span></h1>
                  <p className='text-[#90A3BF] text-sm '>35,000</p>

                </div>
                <button className='bg-[#FF5C00] text-white font-semibold text-base flex justify-center items-center rounded-sm p-2'>Rent Now</button>


              </div>
            </div>
            {/* 5th Card */}
            <div className="flex flex-col p-3 gap-3 bg-[#FFFFFF] w-76 h-auto rounded-xl">
              <div className="flex justify-around items-center ">
                <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>Nissan GT - R</h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <img className='' src={hondacar} alt="" />
              <div className="flex flex-between gap-1">
                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="#90A3BF" />
                  </svg>
                  Milage</p>
                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z" fill="#90A3BF" />
                    <rect x="4" y="4" width="16" height="16" rx="8" fill="white" />
                    <path d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z" fill="#90A3BF" />
                    <rect x="8" y="8" width="8" height="8" rx="4" fill="white" />
                    <rect x="11" y="17" width="2" height="4" fill="#90A3BF" />
                    <rect x="17" y="11" width="4" height="2" fill="#90A3BF" />
                    <rect x="3" y="11" width="4" height="2" fill="#90A3BF" />
                  </svg>
                  Manual</p>

                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="#90A3BF" />
                    <path d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z" fill="#90A3BF" />
                    <path d="M19.9901 7.3401C20.1501 9.2801 18.7701 10.9801 16.8601 11.2101C16.8501 11.2101 16.8501 11.2101 16.8401 11.2101H16.8101C16.7501 11.2101 16.6901 11.2101 16.6401 11.2301C15.6701 11.2801 14.7801 10.9701 14.1101 10.4001C15.1401 9.4801 15.7301 8.1001 15.6101 6.6001C15.5401 5.7901 15.2601 5.0501 14.8401 4.4201C15.2201 4.2301 15.6601 4.1101 16.1101 4.0701C18.0701 3.9001 19.8201 5.3601 19.9901 7.3401Z" fill="#90A3BF" />
                    <path d="M21.99 16.5899C21.91 17.5599 21.29 18.3999 20.25 18.9699C19.25 19.5199 17.99 19.7799 16.74 19.7499C17.46 19.0999 17.88 18.2899 17.96 17.4299C18.06 16.1899 17.47 14.9999 16.29 14.0499C15.62 13.5199 14.84 13.0999 13.99 12.7899C16.2 12.1499 18.98 12.5799 20.69 13.9599C21.61 14.6999 22.08 15.6299 21.99 16.5899Z" fill="#90A3BF" />
                  </svg>
                  With Diver</p>
              </div>

              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>33,000/ <span className='text-[#90A3BF] text-sm'>day</span></h1>
                  <p className='text-[#90A3BF] text-sm '>35,000</p>

                </div>
                <button className='bg-[#FF5C00] text-white font-semibold text-base flex justify-center items-center rounded-sm p-2'>Rent Now</button>


              </div>
            </div>
            {/* 6th Card */}
            <div className="flex flex-col p-3 gap-3 bg-[#FFFFFF] w-76 h-auto rounded-xl">
              <div className="flex justify-around items-center ">
                <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>Nissan GT - R</h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <img className='' src={hondacar} alt="" />
              <div className="flex flex-between gap-1">
                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="#90A3BF" />
                  </svg>
                  Milage</p>
                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z" fill="#90A3BF" />
                    <rect x="4" y="4" width="16" height="16" rx="8" fill="white" />
                    <path d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z" fill="#90A3BF" />
                    <rect x="8" y="8" width="8" height="8" rx="4" fill="white" />
                    <rect x="11" y="17" width="2" height="4" fill="#90A3BF" />
                    <rect x="17" y="11" width="4" height="2" fill="#90A3BF" />
                    <rect x="3" y="11" width="4" height="2" fill="#90A3BF" />
                  </svg>
                  Manual</p>

                <p className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"] flex gap-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="#90A3BF" />
                    <path d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z" fill="#90A3BF" />
                    <path d="M19.9901 7.3401C20.1501 9.2801 18.7701 10.9801 16.8601 11.2101C16.8501 11.2101 16.8501 11.2101 16.8401 11.2101H16.8101C16.7501 11.2101 16.6901 11.2101 16.6401 11.2301C15.6701 11.2801 14.7801 10.9701 14.1101 10.4001C15.1401 9.4801 15.7301 8.1001 15.6101 6.6001C15.5401 5.7901 15.2601 5.0501 14.8401 4.4201C15.2201 4.2301 15.6601 4.1101 16.1101 4.0701C18.0701 3.9001 19.8201 5.3601 19.9901 7.3401Z" fill="#90A3BF" />
                    <path d="M21.99 16.5899C21.91 17.5599 21.29 18.3999 20.25 18.9699C19.25 19.5199 17.99 19.7799 16.74 19.7499C17.46 19.0999 17.88 18.2899 17.96 17.4299C18.06 16.1899 17.47 14.9999 16.29 14.0499C15.62 13.5199 14.84 13.0999 13.99 12.7899C16.2 12.1499 18.98 12.5799 20.69 13.9599C21.61 14.6999 22.08 15.6299 21.99 16.5899Z" fill="#90A3BF" />
                  </svg>
                  With Diver</p>
              </div>

              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>33,000/ <span className='text-[#90A3BF] text-sm'>day</span></h1>
                  <p className='text-[#90A3BF] text-sm '>35,000</p>

                </div>
                <button className='bg-[#FF5C00] text-white font-semibold text-base flex justify-center items-center rounded-sm p-2'>Rent Now</button>


              </div>
            </div>

          </div>
          {/* Car Show Room */}
          <div className="flex justify-center items-center relative">
            <button className='flex justify-center items-center text-[white] bg-[#FF5C00] w-39 h-11 text-base rounded-sm mb-6'>Show more Car</button>
            <p className='text-[#90A3BF] font-medium text-sm text-end absolute right-14 bottom-6 '>120 Car</p>

          </div>

        </div>

      </div>
    </>
  );
}

export default CategoryCarRent;
