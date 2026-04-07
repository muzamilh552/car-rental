import React, { useState } from 'react';
import car from './SignIn/car.png'
import { LuEyeOff } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { EndPoint, BACKENDURL } from "./Utils/RoutePaths";

const UpdatePassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")

    const upDatePasswordForm = (evt) => {
        evt.preventDefault();
        upDatePassword();
        console.log("Password", password)
        console.log("ConfPassword", confPassword)
        setPassword("")
        setConfPassword("")

    }

    const upDatePassword = async () => {
        
        const postData = {
            password:password,
            confPassword: confPassword,

        }
        try {
       const response = await axios.post(BACKENDURL+ EndPoint.forgotpassword);
console.log("Forget Data Value",response.data); 
                                navigate("/mailverification")

        } catch (error) {
            console.log("Wrong Error",error);

        }


    }

    return (
        <>
            <div className="flex justify-center min-h-screen max-sm:flex-col">
                <div className="flex flex-col w-full justify-center items-center px-12 py-13 bg-[linear-gradient(180deg,#FD5B00_0%,#FF630B_53.12%,#FF650E_67.59%,#FF6711_81.84%,#FF6915_100%)]
    ">
                    <img className='w-full' src={car} alt="" />

                    <h1 className='font-["Plus_Jakarta_Sans"] text-[#FFFFFF] text-3xl font-semibold '>Reset Password</h1>


                </div>

                <div className="flex flex-col justify-center items-center w-full gap-6 px-24 py-16 relative">
                    <h2 className='text-[#333333] font-bold text-3xl '>Change Password </h2>
                    <form action="" onSubmit={(evt) => {
                        upDatePasswordForm(evt)
                    }}>
                        <div className="flex  justify-between gap-4 max-sm:flex-col">
                            <div className="flex flex-col mt-6 relative max-sm:w-102">
                                <label className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]' htmlFor="password">Password</label>
                                <input className='bg-[#F4F2F2] p-2 rounded-xs' type="text" name='password' id='password' value={password} placeholder='.........' onChange={(evt) => {
                                    setPassword(evt.target.value)
                                }} />
                                <LuEyeOff className='absolute right-2 top-9' />
                            </div>

                            <div className="flex flex-col mt-6 relative">
                                <label className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]' htmlFor="confPassword">Confirm Password</label>
                                <input className='bg-[#F4F2F2] p-2 rounded-xs ' type="text" id='confPassword' name='confPassword' value={confPassword} placeholder='.........' onChange={(evt) => {
                                    setConfPassword(evt.target.value)
                                }} />
                                <LuEyeOff className='absolute right-2 top-9' />
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-12">
                            <button type='submit' className='bg-[#FF5C00] flex justify-center items-center rounded-sm  text-[#FFFFFF] text-base font-bold px-42 py-2 cursor-pointer max-sm:px-32' >Update Password</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
}

export default UpdatePassword;
