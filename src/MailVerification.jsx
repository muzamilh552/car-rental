import React, {  useState } from 'react';
import car from './SignIn/car.png'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { EndPoint, BACKENDURL } from "./Utils/RoutePaths";
import LoadingIcons from "react-loading-icons";
import OTPInput from "react-otp-input";
import { toast } from 'react-toastify';


const MailVerification = () => {
    // const location = useLocation()
    const [finalOTP, setfinalOTP] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const navigate = useNavigate()

    const formControl = (evt) => {
        evt.preventDefault();
        sendOTP()
    }
    const sendOTP = async () => {

        setIsLoading(true);

        try {
            const response = await axios.post(
                BACKENDURL + EndPoint.verify, { token: finalOTP },);
            console.log("Responses email:", response.data);
            if (response.data.success) {
                localStorage.setItem("OTP Token", response.data.token);
                localStorage.setItem("Token", response.data.token);
                toast.success("Account Created Successfully!", {
                    theme: "dark",
                    // type: "success",
                    autoClose: 3000,

                })
                navigate("/homescreen")

            } else {
                // alert(response.data.message)
toast.error(response.data.message || "OTP Verification Failed", {
    theme: "dark",
    autoClose: 3000
})
            }
                
        }
         catch (error) {
            console.log(error)
            const errorMessage = error?.response?.data?.message || error?.message || "OTP Expired";
            // toast.error(error.message ?? error ?? "OTP expired",{ autoClose:3000, theme: "dark"})
            if(errorMessage === "Invalid verification token."){
            toast.error("You have entered Incorrect OTP, Check your OTP and try again",{ autoClose:3000, theme: "dark"})

            } else{
                toast.error(errorMessage, {
                    theme: "dark",
                    autoClose:3000,
                })
            }
        } finally {
            setIsLoading(false)
        }

    }

const reSendOTPCode =async () => {
    try {
const response = await axios.post(BACKENDURL + EndPoint.verify, { token: finalOTP },{
    "email":localStorage.getItem("ForgetEmail"),
    "subject":"Resent OTP",
});
console.log("Response:",response);
        toast.success(`OTP is send to ${localStorage.getItem("email")} Successfully, Check your email`);
    } catch (error) {
        toast.error(error.message ?? error.response.data.message ?? "OTP Resent Failed");
    }

}

    return (
        <>
            <div className="flex justify-center min-h-screen max-sm:flex-col">
                <div className="flex flex-col w-full justify-center items-center px-12 py-13 bg-[linear-gradient(180deg,#FD5B00_0%,#FF630B_53.12%,#FF650E_67.59%,#FF6711_81.84%,#FF6915_100%)]
  ">
                    <img className='w-full' src={car} alt="" />

                    <h1 className='font-["Plus_Jakarta_Sans"] text-[#FFFFFF] text-3xl font-semibold '>Mail Verification</h1>


                </div>

                <div className="flex flex-col justify-center items-center w-full gap-6 px-24 py-16 relative">
                    <form action="" onSubmit={formControl}>
                        <h1 className='font-["Plus_Jakarta_Sans"] text-[#333333] font-bold text-5xl leading-12'>Check Your Email</h1>
                        <h2 className='text-[#333333] font-bold text-3xl '>Verification Code </h2>
                        <p className='text-[#333333] text-base font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, nobis?</p>
                        <div className="w-full flex flex-row justify-center gap-[2vmin] py-[4vmin]">
                            <OTPInput shouldAutoFocus inputType="tel"
                                value={finalOTP}
                                onChange={setfinalOTP}
                                numInputs={6}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} id='otpinput' className="border-[1px] border-[#FC4500]  h-10" />}
                            />
                        </div>
                        <div className="flex  gap-2">
                            <h3 className='text-[#333333] font-normal text-base '>Didn’t receive code?</h3>
                            <button className='text-[#FF5C00] font-semibold text-base cursor-pointer' type='button' onClick={() => {
                               reSendOTPCode();
                            }}>Resend Code</button>
                        </div>
                        <div className="flex justify-center items-center my-4">
                            <button className='bg-[#FF5C00] flex justify-center items-center rounded-sm  text-[#FFFFFF] text-base font-bold px-42 py-2 cursor-pointer' disabled={isLoading} type="submit" > {isLoading ? (
                                <LoadingIcons.ThreeDots className="ml-6" />
                            ) : (
                                "Verify"
                            )}</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
}

export default MailVerification;
