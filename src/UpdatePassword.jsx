import React, { useState } from 'react';
import car from './SignIn/car.png'
import { LuEyeOff } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { EndPoint, BACKENDURL } from "./Utils/RoutePaths";
import { useFormik } from 'formik';

import { UpDatePassword } from "./schemas";
import { toast } from 'react-toastify';

const initialValues = {
    password: "",
    confPassword: "",
}

const UpdatePassword = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmpassword, setshowconfirmpassword] = useState(false);

    const { errors, values, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: UpDatePassword,
        onSubmit: (values) => {
            const postData = {
                password: values.password,
                confPassword: values.confPassword,
            }
            upDatePassword(postData)
        }
    })

    const upDatePassword = async (postData) => {
        setIsLoading(true);

        try {
            const response = await axios.post(BACKENDURL + EndPoint.resetpassword, postData);
            if (response.data.success) {
                localStorage.setItem("password", postData.password);
                localStorage.setItem("confPassword", postData.confPassword);
                navigate("/")
                toast.success(response.message ?? "Login with new password")
            }
        } catch (error) {
            console.log("Wrong Error", error);
            toast.error(error ?? error.message ?? error.response.data.message)
        } finally {
            setIsLoading(false);
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
                    <form action="" onSubmit={handleSubmit}>
                        <div className="flex  justify-between gap-4 max-sm:flex-col">
                            <div className="flex flex-col mt-6 relative max-sm:w-102">
                                <label className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]' htmlFor="password">Password</label>
                                <input className='bg-[#F4F2F2] p-2 rounded-xs' type={showPassword ? "text" : "password"} name='password' id='password' value={values.password} placeholder='*******' onChange={handleChange} onBlur={handleBlur} />
                                {errors.password && touched.password ? (<p className='text-red-500 text-sm'>{errors.password}</p>) : null}
                                <img
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                    className="absolute top-4 right-0 m-[2vmin] w-[24px] h-[24px] cursor-pointer"
                                    src={
                                        showPassword
                                            ? "https://car-rantal-mauve.vercel.app/assets/logo/eye-slash.2.svg"
                                            : "https://car-rantal-mauve.vercel.app/assets/logo/eye.3.svg"
                                    }
                                    alt=""
                                />
                            </div>

                            <div className="flex flex-col mt-6 relative">
                                <label className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]' htmlFor="confPassword">Confirm Password</label>
                                <input className='bg-[#F4F2F2] p-2 rounded-xs ' type={showconfirmpassword ? "text" : "password"} id='confPassword' name='confPassword' value={values.confPassword} placeholder='*******' onChange={handleChange} onBlur={handleBlur} />
                                {errors.confPassword && touched.confPassword ? (<p className='text-red-500 text-sm'>{errors.confPassword}</p>) : null}
                                <img
                                    onClick={() => {
                                        setshowconfirmpassword(!showconfirmpassword);
                                    }}
                                    className="absolute top-4 right-0  m-[2vmin] w-[24px] h-[24px] cursor-pointer"
                                    src={
                                        showconfirmpassword
                                            ? "https://car-rantal-mauve.vercel.app/assets/logo/eye-slash.2.svg"
                                            : "https://car-rantal-mauve.vercel.app/assets/logo/eye.3.svg"
                                    }
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-12">
                            <button type='submit' className='bg-[#FF5C00] flex justify-center items-center rounded-sm  text-[#FFFFFF] text-base font-bold px-42 py-2 cursor-pointer max-sm:px-32' disabled={isLoading} >{isLoading ? (
                                <LoadingIcons.ThreeDots className="ml-6" />
                            ) : (
                                "Update Password"
                            )}</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
}

export default UpdatePassword;
