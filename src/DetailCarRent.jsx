import React, { useState } from 'react';
import hondacar from '../src/hondacar.png'
import rentcar1 from '../src/rentcar1.png'
import rentcar2 from '../src/rentcar2.png'
import { IoChevronDown } from "react-icons/io5";
import { FiCamera } from "react-icons/fi";

const DetailCarRent = () => {
    const [name, setName] = useState("")
    const [phoneno, setPhoneNo] = useState("")
    const [cnic, setCnic] = useState("")
    const [greentiername, setGreentierName] = ("")
    const [greentiercnic, setGreentierCnic] = ("")

    const CarRentFormSubmit = (event) => {
        event.preventDefault();
        console.log("name", name)
        console.log("phoneNo", phoneno)
        console.log("CNIC", cnic)
        console.log("GreentierName", greentiername)
        console.log("GreentierCNIC", greentiercnic)

        setName("")
        setPhoneNo("")
        setCnic("")
        setGreentierName("")
        setGreentierCnic("")

    }


    return (
        <>
            <div className="flex mt-7">
                <div className="flex flex-col bg-[#FFFFFF] my-6 pl-6 w-[21%]">
                    <h1 className='text-[#94A7CB66] font-semibold text-xs font-["Plus_Jakarta_Sans"]'>M A I N  M E N U</h1>
                    <div className="flex gap-2 bg-[#FF5C00] py-2.5 px-3 w-[70%] rounded-sm mt-6 mb-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.043 3.14941C11.0596 2.33305 12.653 2.28692 13.7549 3.00684L13.9688 3.16113L20.5137 8.39648V8.39746C20.8916 8.70556 21.2196 9.18882 21.4307 9.74121C21.6407 10.2911 21.7189 10.8673 21.6465 11.3477L20.3877 18.8848C20.1386 20.3182 18.7435 21.5 17.2998 21.5H6.7002C5.327 21.5 4.04309 20.4867 3.68262 19.1641L3.62305 18.8955L2.36328 11.3574V11.3564L2.33984 11.1709C2.30172 10.7279 2.38061 10.2244 2.56445 9.74219C2.74829 9.2601 3.02465 8.83066 3.34961 8.52441L3.49219 8.40039L10.043 3.15039V3.14941ZM12 13.75C11.3139 13.75 10.75 14.3139 10.75 15V18C10.75 18.6861 11.3139 19.25 12 19.25C12.6861 19.25 13.25 18.6861 13.25 18V15C13.25 14.3139 12.6861 13.75 12 13.75Z" fill="white" stroke="white" />
                        </svg>
                        <h1 className='text-white'>Home</h1>

                    </div>
                    <div className="flex  flex-col gap-6">
                        <h2 className='flex items-center gap-3 text-[#90A3BF] font-medium text-base font-["Plus_Jakarta_Sans"]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.51 2.82996H8.49C6 2.82996 5.45 4.06996 5.13 5.58996L4 11H20L18.87 5.58996C18.55 4.06996 18 2.82996 15.51 2.82996Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.99 19.82C22.1 20.99 21.16 22 19.96 22H18.08C17 22 16.85 21.54 16.66 20.97L16.46 20.37C16.18 19.55 16 19 14.56 19H9.43998C7.99998 19 7.78998 19.62 7.53998 20.37L7.33998 20.97C7.14998 21.54 6.99998 22 5.91998 22H4.03998C2.83998 22 1.89998 20.99 2.00998 19.82L2.56998 13.73C2.70998 12.23 2.99998 11 5.61998 11H18.38C21 11 21.29 12.23 21.43 13.73L21.99 19.82Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 8H3" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 8H20" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 3V5" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.5 5H13.5" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 15H9" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 15H18" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            CarRent
                        </h2>

                        <h2 className='flex items-center gap-3 text-[#90A3BF] font-medium text-base font-["Plus_Jakarta_Sans"]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 22H21" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.59998 8.37988H4C3.45 8.37988 3 8.82988 3 9.37988V17.9999C3 18.5499 3.45 18.9999 4 18.9999H5.59998C6.14998 18.9999 6.59998 18.5499 6.59998 17.9999V9.37988C6.59998 8.82988 6.14998 8.37988 5.59998 8.37988Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.8 5.18994H11.2C10.65 5.18994 10.2 5.63994 10.2 6.18994V17.9999C10.2 18.5499 10.65 18.9999 11.2 18.9999H12.8C13.35 18.9999 13.8 18.5499 13.8 17.9999V6.18994C13.8 5.63994 13.35 5.18994 12.8 5.18994Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20 2H18.4C17.85 2 17.4 2.45 17.4 3V18C17.4 18.55 17.85 19 18.4 19H20C20.55 19 21 18.55 21 18V3C21 2.45 20.55 2 20 2Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Insight
                        </h2>

                        <h2 className='flex items-center gap-3 text-[#90A3BF] font-medium text-base font-["Plus_Jakarta_Sans"]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#90A3BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.9965 11H16.0054" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.9955 11H12.0045" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.99451 11H8.00349" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Inbox
                        </h2>
                        <h2 className='flex items-center gap-3 text-[#90A3BF] font-medium text-base font-["Plus_Jakarta_Sans"]'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2V5" stroke="#90A3BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16 2V5" stroke="#90A3BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.5 9.09009H20.5" stroke="#90A3BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#90A3BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.6947 13.7H15.7037" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.6947 16.7H15.7037" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.9955 13.7H12.0045" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.9955 16.7H12.0045" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.29431 13.7H8.30329" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.29431 16.7H8.30329" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Calender
                        </h2>
                    </div>



                    <div className="flex flex-col gap-4 mt-20">
                        <h1 className='text-[#94A7CB66] font-semibold text-xs font-["Plus_Jakarta_Sans"]'>P R E F E R E N C E S</h1>
                        <div className="flex gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9.11011V14.8801C3 17.0001 3 17.0001 5 18.3501L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.3501C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <h1 className='text-[#90A3BF] text-base font-medium font-["Plus_Jakarta_Sans"]'>Settings</h1>
                        </div>
                        <div className="flex gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 8V13" stroke="#90A3BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.9946 16H12.0036" stroke="#90A3BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                            <h1 className='text-[#90A3BF] text-base font-medium font-["Plus_Jakarta_Sans"]'>Help & Center</h1>
                        </div>

                        <div className="flex gap-2 mt-52">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.8999 7.55999C9.2099 3.95999 11.0599 2.48999 15.1099 2.48999H15.2399C19.7099 2.48999 21.4999 4.27999 21.4999 8.74999V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.0001 12H3.62012" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <h1 className='text-[#90A3BF] text-base font-medium font-["Plus_Jakarta_Sans"]'>Log Out</h1>
                        </div>


                    </div>
                </div>

                <div className="flex-1 bg-[#F6F7F9] ">
                    <div className="flex gap-6 mt-7">
                        <div className="flex flex-col gap-4 ml-12">
                            <div className="p-7 bg-[#FF5C00] w-107 h-90 rounded-sm flex flex-col gap-4">
                                <h1 className='text-[#FFFFFF] font-semibold text-3xl '>Sports car with the best design and acceleration</h1>
                                <p className='text-[#FFFFFF] font-medium text-base'>Safety and comfort while driving a futuristic and elegant sports car</p>
                                {/* <div className="flex items-center "> */}
                                {/* <button className='border border-[#7B7B7B] bg-[#FF5C00] p-2 text-white'>Rental Car</button> */}
                                <img className='w-[80%] h-60' src={hondacar} alt="" />
                                {/* </div> */}
                            </div>


                            <div className="flex gap-4">
                                <img className='bg-[#AF836B] rounded-lg w-33 h-27' src={hondacar} alt="" />
                                <img className=' rounded-lg w-33 h-27' src={rentcar1} alt="" />
                                <img className=' rounded-lg w-33 h-27' src={rentcar2} alt="" />

                            </div>

                        </div>
                        <div className="flex flex-col bg-white p-4 w-[50%] rounded-lg">
                            <div className="flex justify-between items-center">
                                <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>Amar Haroon</h1>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <div className="flex gap-1 items-center mt-4 mb-12">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.16672 2.65838C9.22429 2.47584 9.33854 2.31641 9.49289 2.20324C9.64725 2.09007 9.83366 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5572 2.20324C10.7116 2.31641 10.8258 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6316 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3328 8.05589C18.3933 8.24484 18.3902 8.44838 18.3241 8.63542C18.258 8.82247 18.1325 8.98273 17.9667 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5212 17.187 15.4628 17.3698C15.4044 17.5526 15.289 17.712 15.1336 17.8246C14.9781 17.9372 14.7908 17.9972 14.5989 17.9958C14.4069 17.9944 14.2205 17.9316 14.0667 17.8167L10.0001 14.8417L5.94172 17.7917C5.78798 17.9066 5.60153 17.9694 5.40959 17.9708C5.21766 17.9722 5.0303 17.9122 4.87487 17.7996C4.71944 17.687 4.60408 17.5276 4.54565 17.3448C4.48721 17.162 4.48876 16.9653 4.55006 16.7834L6.10006 12.0084L2.04172 9.06671C1.87596 8.95773 1.75043 8.79747 1.68432 8.61042C1.61821 8.42338 1.61516 8.21984 1.67562 8.03089C1.73608 7.84195 1.85674 7.67799 2.01915 7.56408C2.18157 7.45016 2.37681 7.39255 2.57506 7.40005H7.57506L9.16672 2.65838Z" fill="#FBAD39" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.16672 2.65838C9.22429 2.47584 9.33854 2.31641 9.49289 2.20324C9.64725 2.09007 9.83366 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5572 2.20324C10.7116 2.31641 10.8258 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6316 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3328 8.05589C18.3933 8.24484 18.3902 8.44838 18.3241 8.63542C18.258 8.82247 18.1325 8.98273 17.9667 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5212 17.187 15.4628 17.3698C15.4044 17.5526 15.289 17.712 15.1336 17.8246C14.9781 17.9372 14.7908 17.9972 14.5989 17.9958C14.4069 17.9944 14.2205 17.9316 14.0667 17.8167L10.0001 14.8417L5.94172 17.7917C5.78798 17.9066 5.60153 17.9694 5.40959 17.9708C5.21766 17.9722 5.0303 17.9122 4.87487 17.7996C4.71944 17.687 4.60408 17.5276 4.54565 17.3448C4.48721 17.162 4.48876 16.9653 4.55006 16.7834L6.10006 12.0084L2.04172 9.06671C1.87596 8.95773 1.75043 8.79747 1.68432 8.61042C1.61821 8.42338 1.61516 8.21984 1.67562 8.03089C1.73608 7.84195 1.85674 7.67799 2.01915 7.56408C2.18157 7.45016 2.37681 7.39255 2.57506 7.40005H7.57506L9.16672 2.65838Z" fill="#FBAD39" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.16672 2.65838C9.22429 2.47584 9.33854 2.31641 9.49289 2.20324C9.64725 2.09007 9.83366 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5572 2.20324C10.7116 2.31641 10.8258 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6316 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3328 8.05589C18.3933 8.24484 18.3902 8.44838 18.3241 8.63542C18.258 8.82247 18.1325 8.98273 17.9667 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5212 17.187 15.4628 17.3698C15.4044 17.5526 15.289 17.712 15.1336 17.8246C14.9781 17.9372 14.7908 17.9972 14.5989 17.9958C14.4069 17.9944 14.2205 17.9316 14.0667 17.8167L10.0001 14.8417L5.94172 17.7917C5.78798 17.9066 5.60153 17.9694 5.40959 17.9708C5.21766 17.9722 5.0303 17.9122 4.87487 17.7996C4.71944 17.687 4.60408 17.5276 4.54565 17.3448C4.48721 17.162 4.48876 16.9653 4.55006 16.7834L6.10006 12.0084L2.04172 9.06671C1.87596 8.95773 1.75043 8.79747 1.68432 8.61042C1.61821 8.42338 1.61516 8.21984 1.67562 8.03089C1.73608 7.84195 1.85674 7.67799 2.01915 7.56408C2.18157 7.45016 2.37681 7.39255 2.57506 7.40005H7.57506L9.16672 2.65838Z" fill="#FBAD39" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.16672 2.65838C9.22429 2.47584 9.33854 2.31641 9.49289 2.20324C9.64725 2.09007 9.83366 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5572 2.20324C10.7116 2.31641 10.8258 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6316 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3328 8.05589C18.3933 8.24484 18.3902 8.44838 18.3241 8.63542C18.258 8.82247 18.1325 8.98273 17.9667 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5212 17.187 15.4628 17.3698C15.4044 17.5526 15.289 17.712 15.1336 17.8246C14.9781 17.9372 14.7908 17.9972 14.5989 17.9958C14.4069 17.9944 14.2205 17.9316 14.0667 17.8167L10.0001 14.8417L5.94172 17.7917C5.78798 17.9066 5.60153 17.9694 5.40959 17.9708C5.21766 17.9722 5.0303 17.9122 4.87487 17.7996C4.71944 17.687 4.60408 17.5276 4.54565 17.3448C4.48721 17.162 4.48876 16.9653 4.55006 16.7834L6.10006 12.0084L2.04172 9.06671C1.87596 8.95773 1.75043 8.79747 1.68432 8.61042C1.61821 8.42338 1.61516 8.21984 1.67562 8.03089C1.73608 7.84195 1.85674 7.67799 2.01915 7.56408C2.18157 7.45016 2.37681 7.39255 2.57506 7.40005H7.57506L9.16672 2.65838Z" fill="#FBAD39" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.16672 2.65838C9.22429 2.47584 9.33854 2.31641 9.49289 2.20324C9.64725 2.09007 9.83366 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5572 2.20324C10.7116 2.31641 10.8258 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6316 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3328 8.05589C18.3933 8.24484 18.3902 8.44838 18.3241 8.63542C18.258 8.82247 18.1325 8.98273 17.9667 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5212 17.187 15.4628 17.3698C15.4044 17.5526 15.289 17.712 15.1336 17.8246C14.9781 17.9372 14.7908 17.9972 14.5989 17.9958C14.4069 17.9944 14.2205 17.9316 14.0667 17.8167L10.0001 14.8417L5.94172 17.7917C5.78798 17.9066 5.60153 17.9694 5.40959 17.9708C5.21766 17.9722 5.0303 17.9122 4.87487 17.7996C4.71944 17.687 4.60408 17.5276 4.54565 17.3448C4.48721 17.162 4.48876 16.9653 4.55006 16.7834L6.10006 12.0084L2.04172 9.06671C1.87596 8.95773 1.75043 8.79747 1.68432 8.61042C1.61821 8.42338 1.61516 8.21984 1.67562 8.03089C1.73608 7.84195 1.85674 7.67799 2.01915 7.56408C2.18157 7.45016 2.37681 7.39255 2.57506 7.40005H7.57506L9.16672 2.65838Z" fill="#FBAD39" />
                                </svg>
                                <p className='text-[#596780] font-medium text-sm font-["Plus_Jakarta_Sans"]'>440+ Reviewer</p>
                            </div>
                            <p className='text-[#596780] font-normal text-xl font-["Plus_Jakarta_Sans"] mb-6'>This has become the embodiment of Pakistan outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                            <div className="flex flex-wrap gap-6 mb-14">
                                <h1 className='flex gap-12 text-[#90A3BF] font-normal text-xl font-["Plus_Jakarta_Sans"] '>TypeCar <span className='text-[#596780] font-semibold '>Sport</span></h1>
                                <h1 className='flex gap-12 text-[#90A3BF] font-normal text-xl font-["Plus_Jakarta_Sans"] '>Capacity <span className='text-[#596780] font-semibold '>2Person</span></h1>
                                <h1 className='flex gap-12 text-[#90A3BF] font-normal text-xl font-["Plus_Jakarta_Sans"] '>Steering <span className='text-[#596780] font-semibold '>Manual</span></h1>
                                <h1 className='flex gap-12 text-[#90A3BF] font-normal text-xl font-["Plus_Jakarta_Sans"] '>Oil <span className='text-[#596780] font-semibold '>petrol</span></h1>

                            </div>
                            <div className="flex flex-col">
                                <h1 className='font-bold font-["Plus_Jakarta_Sans"] text-[#1A202C] text-xl '>33,000/ <span className='text-[#90A3BF] text-sm'>day</span></h1>
                                <p className='text-[#90A3BF] text-sm '>35,000</p>

                            </div>
                        </div>

                    </div>


                    <div className="flex flex-col my-6 px-14 py-7">
                        <h1 className='text-[#1A202C] font-bold text-xl font-["Plus_Jakarta_Sans"]'>User details</h1>
                        <h2 className='text-[#90A3BF] font-medium text-sm font-["Plus_Jakarta_Sans"]'>Please enter your Details</h2>
                    </div>

                    <div className="flex flex-col p-6 ml-14 mb-7 bg-[#FFFFFF] rounded-lg w-[91%]">
                        <form action="" onSubmit={(event) => {
                            CarRentFormSubmit(event)
                        }}>
                            <div className="flex justify-between my-6">
                                <div className="flex flex-col gap-1 relative">
                                    <label className='text-[#1A202C] font-semibold text-base font-["Plus_Jakarta_Sans"]' htmlFor="name">Name</label>
                                    <input className='p-3 bg-[#F6F7F9] rounded-sm w-96' type="text" id='name' placeholder='Amar haroon' value={name} onChange={(event) => {
                                        setName(event.target.value)
                                    }} />
                                    <IoChevronDown className='absolute right-4 top-10' />
                                </div>

                                <div className="flex flex-col gap-1 relative">
                                    <label className='text-[#1A202C] font-semibold text-base font-["Plus_Jakarta_Sans"]' htmlFor="phoneno">PhoneNo</label>
                                    <input className='p-3 bg-[#F6F7F9] rounded-sm w-96' type="text" id='phoneno' placeholder='98754345789' value={phoneno} onChange={(event) => {
                                        setPhoneNo(event.target.value)
                                    }} />
                                    <IoChevronDown className='absolute right-4 top-10' />
                                </div>

                            </div>

                            <div className="flex justify-between my-6">
                                <div className="flex flex-col gap-1 relative">
                                    <label className='text-[#1A202C] font-semibold text-base font-["Plus_Jakarta_Sans"]' htmlFor="cnic">CNIC</label>
                                    <input className='p-3 bg-[#F6F7F9] rounded-sm w-96' type="text" id='cnic' placeholder='723936540906' value={cnic} onChange={(event) => {
                                        setCnic(event.target.value)
                                    }} />
                                    <IoChevronDown className='absolute right-4 top-10' />
                                </div>
                                <div className="flex mr-29 gap-6">
                                    <div className="flex flex-col gap-1 relative">
                                        <label className='text-[#1A202C] font-semibold text-base font-["Plus_Jakarta_Sans"]' htmlFor="usercnic">UserCNIC</label>
                                        <input className='p-3 bg-[#F6F7F9] rounded-sm w-28' type="file" id='usercnic' />
                                        <FiCamera className='absolute right-12 top-10 w-6 h-6' />

                                    </div>
                                    <div className="flex flex-col gap-1 relative">
                                        <label className='text-[#1A202C] font-medium text-sm font-["Plus_Jakarta_Sans"]' htmlFor="graneetier">Graneetier CNIC</label>
                                        <input className='p-3 bg-[#F6F7F9] rounded-sm w-28' type="file" id='graneetier' />
                                        <FiCamera className='absolute right-12 top-10 w-6 h-6' />

                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 relative">
                                <label className='text-[#1A202C] font-medium text-sm font-["Plus_Jakarta_Sans"]' htmlFor="graneetiername">Graneetier Name</label>
                                <input className='p-3 bg-[#F6F7F9] rounded-sm w-96' type="text" id='graneetiername' placeholder='farrukh' value={greentiername} onChange={(event) => {
                                    setGreentierName(event.target.value)
                                }} />
                                <IoChevronDown className='absolute left-88 top-10' />
                            </div>

                            <div className="flex flex-col gap-1 relative my-6">
                                <label className='text-[#1A202C] font-medium text-sm font-["Plus_Jakarta_Sans"]' htmlFor="graneetiercnic">Graneetier Name CNIC</label>
                                <input className='p-3 bg-[#F6F7F9] rounded-sm w-96' type="text" id='graneetiercnic' placeholder='9245342624252' value={greentiercnic} onChange={(event) => {
                                    setGreentierCnic(event.target.value)
                                }} />
                                <IoChevronDown className='absolute left-88 top-10' />
                            </div>
                            <div className="flex justify-center items-center mt-6">
                                <button className='bg-[#FF5C00] text-white w-35 h-14 font-base font-bold font-["Plus_Jakarta_Sans"] rounded-sm cursor-pointer'>Rent Now</button>
                            </div>
                        </form>

                    </div>



                </div>

            </div>
        </>
    );
}

export default DetailCarRent;
