import React, { useState } from 'react';
import car from '../SignIn/car.png'
import { MdOutlineEmail } from "react-icons/md";
import { LuEyeOff } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SignInFormSubmit = (evt) => {
        evt.preventDefault();
        console.log("email", email)
        console.log("password", password)

        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className="flex justify-center min-h-screen max-sm:flex-col">
                <div className="flex flex-col w-full justify-center items-center px-12 py-16 bg-[linear-gradient(180deg,#FD5B00_0%,#FF630B_53.12%,#FF650E_67.59%,#FF6711_81.84%,#FF6915_100%)]
">
                    <img className='h-99' src={car} alt="" />
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h1 className='font-["Plus_Jakarta_Sans"] text-[#FFFFFF] text-3xl font-semibold '>Welcome</h1>
                        <p className='font-["Plus_Jakarta_Sans"] text-[#FFFFFF] text-base font-normal'>Just a Showroom of clicks and we start</p>

                        <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="white" />
                            <circle cx="12" cy="12" r="4" fill="url(#paint0_linear_2_2944)" />
                            <g opacity="0.6">
                                <rect x="32" y="4" width="16" height="16" rx="8" fill="white" />
                            </g>
                            <g opacity="0.2">
                                <rect x="56" y="4" width="16" height="16" rx="8" fill="white" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_2_2944" x1="12" y1="8" x2="12" y2="16" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF6915" />
                                    <stop offset="0.9997" stop-color="#FF6711" stop-opacity="0.814355" />
                                    <stop offset="0.9998" stop-color="#FF630B" stop-opacity="0.531179" />
                                    <stop offset="0.9999" stop-color="#FF650E" stop-opacity="0.675904" />
                                    <stop offset="1" stop-color="#FD5B00" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                </div>

                <div className="flex flex-col justify-center w-full gap-6 px-24 py-16 relative">
                    <h1 className='font-["Plus_Jakarta_Sans"] text-[#18345E] font-bold text-5xl leading-12'>Sign In</h1>
                    <form action="" onSubmit={(evt) => {
                        SignInFormSubmit(evt)
                    }}>
                        <div className="flex flex-col mt-4 relative">
                            <label className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]' htmlFor="email">Email</label>
                            <input className='bg-[#F4F2F2] p-2 rounded-xs' type="text" id='email' value={email} placeholder='johndoe@gmail.com' onChange={(evt) => {
                                setEmail(evt.target.value)
                            }} />
                            <MdOutlineEmail className='absolute right-2 top-9' />
                        </div>
                        <div className="flex flex-col mt-6 relative">
                            <label className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]' htmlFor="password">Password</label>
                            <input className='bg-[#F4F2F2] p-2 rounded-xs' type="text" id='password' value={password} placeholder='.........' onChange={(evt) => {
                                setPassword(evt.target.value)
                            }} />
                            <LuEyeOff className='absolute right-2 top-9' />
                        </div>
                        <div className="flex justify-end my-4">
                            <button className='text-[#FF5C00] underline cursor-pointer'>Forgotten Password</button>
                        </div>
                        <div className="flex justify-center items-center my-4">
                            <button className='bg-[#FF5C00] flex justify-center items-center rounded-sm  text-[#FFFFFF] text-base font-bold w-full py-2 cursor-pointer' >Sign In</button>
                        </div>
                        <div className="flex justify-center ">
                            <h1 className='text-[#312E81CC]'>Don't have an account? <button className='text-[#FF5C00] cursor-pointer' onClick={()=> {
                                navigate("/signup");
                            }}>Sign Up</button></h1>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
}

export default SignIn;
