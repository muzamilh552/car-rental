import React, { useState } from 'react';
import car from './SignIn/car.png'
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { EndPoint, BACKENDURL } from "./Utils/RoutePaths";
import axios from 'axios';
import LoadingIcons from "react-loading-icons";
import { useFormik } from 'formik';
import { OTPVrification } from './schemas';
import { toast } from 'react-toastify';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const initialValues = {
    email: "",
}

const ResetPassword = () => {

    let pictures = [{
        image: 'https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
        styling: 'w-[100%] max-h-[100vh] object-cover',
    }
        ,
    {
        image: 'https://images.unsplash.com/photo-1624976173209-55c50c12a943?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMHBvcnRyYWl0fGVufDB8fDB8fHww',
        styling: 'w-[100%] max-h-[100vh] object-cover',
    },
    {
        image: 'https://c4.wallpaperflare.com/wallpaper/883/187/577/audi-r8-car-vehicle-super-car-wallpaper-preview.jpg',
        styling: 'w-[100%] max-h-[100vh] object-cover',
    }
        ,
    {
        image: 'https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
        styling: 'w-[100%] max-h-[100vh] object-cover',
    }
        , {
        image: 'https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
        styling: 'w-[100%] max-h-[100vh] object-cover',
    }
        , {
        image: 'https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
        styling: 'w-[100%] max-h-[100vh] object-cover',
    }
        , {
        image: 'https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
        styling: 'w-[100%] max-h-[100vh] object-cover',
    }
        ,
    {
        image: 'https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
        styling: 'w-[100%] max-h-[100vh] object-cover',
    }
    ]


    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: OTPVrification,

        onSubmit: (values, action) => {
            const postData = {
                email: values.email,
                subject: "Resent OTP"
            };
            reSendOTP(postData, action);

        }

    })

    const navigate = useNavigate();
    // const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const reSendOTP = async (postData, action) => {
        setIsLoading(true)

        try {
            const response = await axios.post(
                BACKENDURL + EndPoint.resendOTP,
                postData,
            );
            console.log("Responses:", response);
            if (response.data.success) {
                localStorage.setItem("email", postData.email);
                navigate("/mailverification");
            }
            action.resetForm();
            toast("OTP Resend Successfully,Check your Gmail box!", {
                theme: "dark",
                type: "success",
                autoClose: 3000,

            })
        } catch (error) {
            console.log(error)
            toast.error(error.message ?? error.data.message ?? error ?? "Unknown error in resending OTP,please try again later");
        } finally {
            setIsLoading(false);
        }
    }
    // For Using Resend Button
    // OTP is send to b2@yopmail.com successfully. Check your email

    // For Error 
    //Something went wrong

    // Create new account here...



    return (
        <>
            <div className="flex justify-center min-h-screen max-sm:flex-col">
                <div className="flex w-full justify-center items-center bg-[linear-gradient(180deg,#FD5B00_0%,#FF630B_53.12%,#FF650E_67.59%,#FF6711_81.84%,#FF6915_100%)] overflow-hidden
  ">
                    <Carousel showThumbs={false} infiniteLoop={true}>
                        {pictures && pictures.map((img, index) => (
                            <div className='w-full h-[100vh] overflow-hidden' key={index}>
                                <img className='w-full h-full object-cove' src={`${img.image}`} alt="" />
                            </div>
                        ))}
                    </Carousel>
                    {/* <h1 className='font-["Plus_Jakarta_Sans"] text-[#FFFFFF] text-3xl font-semibold '>Reset Password</h1> */}


                </div>

                <div className="flex flex-col justify-center items-center w-full gap-6 px-24 py-16 relative">
                    <form action="" onSubmit={handleSubmit}>
                        <h2 className='text-[#333333] font-bold text-3xl '>Enter mail for reset password </h2>
                        {/* <p className='text-[#333333] text-base font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, nobis?</p> */}
                        <div className="flex flex-col w-full mt-4 relative">
                            <label className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]' htmlFor="email">Email</label>
                            <input className='bg-[#F4F2F2] p-2 rounded-xs' type="text" id='email' name='email' value={values.email} placeholder='johndoe@gmail.com'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (<p className='text-red-500 text-sm'>{errors.email}</p>) : null}
                            <MdOutlineEmail className='absolute right-2 top-9' />
                        </div>

                        <div className="flex justify-center items-center my-4">
                            <button className='bg-[#FF5C00] flex justify-center items-center rounded-sm  text-[#FFFFFF] text-base font-bold px-48 py-2 cursor-pointer' disabled={isLoading} type='submit' >{isLoading ? (
                                <LoadingIcons.ThreeDots className="ml-6" />
                            ) : (
                                "Continue"
                            )}</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
}

export default ResetPassword;
