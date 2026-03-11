import React, { useState } from 'react';
import car from './SignIn/car.png'
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")

    return (
        <>
            <div className="flex justify-center min-h-screen max-sm:flex-col">
                <div className="flex flex-col w-full justify-center items-center px-12 py-12 bg-[linear-gradient(180deg,#FD5B00_0%,#FF630B_53.12%,#FF650E_67.59%,#FF6711_81.84%,#FF6915_100%)]
  ">
                    <img className='' src={car} alt="" />

                    <h1 className='font-["Plus_Jakarta_Sans"] text-[#FFFFFF] text-3xl font-semibold '>Reset Password</h1>


                </div>

                <div className="flex flex-col justify-center items-center w-full gap-6 px-24 py-16 relative">
                    <h2 className='text-[#333333] font-bold text-3xl '>Enter mail for reset password </h2>
                    <p className='text-[#333333] text-base font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, nobis?</p>
                    <div className="flex flex-col w-full mt-4 relative">
                        <label className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]' htmlFor="email">Email</label>
                        <input className='bg-[#F4F2F2] p-2 rounded-xs' type="text" id='email' value={email} placeholder='johndoe@gmail.com' onChange={(evt) => {
                            setEmail(evt.target.value)
                        }} />
                        <MdOutlineEmail className='absolute right-2 top-9' />
                    </div>

                    <div className="flex justify-center items-center my-4">
                        <button className='bg-[#FF5C00] flex justify-center items-center rounded-sm  text-[#FFFFFF] text-base font-bold px-48 py-2 cursor-pointer' onClick={() => {
                            navigate("/updatepassword")
                        }}>Continue</button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default ResetPassword;
