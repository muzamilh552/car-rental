import React from 'react';
import car from './SignIn/car.png'
import { useNavigate } from 'react-router-dom';


const MailVerification = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="flex justify-center min-h-screen max-sm:flex-col">
                <div className="flex flex-col w-full justify-center items-center px-12 py-13 bg-[linear-gradient(180deg,#FD5B00_0%,#FF630B_53.12%,#FF650E_67.59%,#FF6711_81.84%,#FF6915_100%)]
  ">
                    <img className='w-full' src={car} alt="" />

                    <h1 className='font-["Plus_Jakarta_Sans"] text-[#FFFFFF] text-3xl font-semibold '>Mail Verification</h1>


                </div>

                <div className="flex flex-col justify-center items-center w-full gap-6 px-24 py-16 relative">
                    <h1 className='font-["Plus_Jakarta_Sans"] text-[#333333] font-bold text-5xl leading-12'>Check Your Email</h1>
                    <h2 className='text-[#333333] font-bold text-3xl '>Verification Code </h2>
                    <p className='text-[#333333] text-base font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, nobis?</p>
                    <div className="flex gap-2 mt-4 relative">
                        <input className='w-18 h-16 border-2 border-[#D1D9DF] rounded-2xl p-7 ' type="text" />
                        <input className='w-18 h-16 border-2 border-[#D1D9DF] rounded-2xl p-7' type="text" />

                        <input className='w-18 h-16 border-2 border-[#D1D9DF] rounded-2xl p-7' type="text" />
                        <input className='w-18 h-16 border-2 border-[#D1D9DF] rounded-2xl p-7' type="text" />
                        <input className='w-18 h-16 border-2 border-[#D1D9DF] rounded-2xl p-7' type="text" />
                        <input className='w-18 h-16 border-2 border-[#D1D9DF] rounded-2xl p-7' type="text" />

                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className='text-[#333333] font-normal text-base '>Didn’t receive code?</h3>
                        <button className='text-[#FF5C00] font-semibold text-base cursor-pointer' onClick={() => {
                            navigate("/resetpassword")
                        }}>Resend Code</button>
                    </div>
                    <div className="flex justify-center items-center my-4">
                        <button className='bg-[#FF5C00] flex justify-center items-center rounded-sm  text-[#FFFFFF] text-base font-bold px-42 py-2 cursor-pointer' >Verify</button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default MailVerification;
