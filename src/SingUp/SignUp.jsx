import React, { useState } from "react";
import car1 from "../SingUp/car1.png";
import car2 from "../SingUp/car2.png";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuEyeOff } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingIcons from "react-loading-icons";
import { EndPoint, BACKENDURL } from "../Utils/RoutePaths";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { toast } from "react-toastify";


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confPassword: "",
}

const SignUp = () => {
  const navigate = useNavigate();
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  // const [confPassword, setConfPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmpassword, setshowconfirmpassword] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,

    onSubmit: (values, action) => {
      const postData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phone,
        password: values.password,
        confPassword: values.confPassword,
      };
      handleSignUpForm(postData, action)
    }

  })


  const handleSignUpForm = async (postData, action) => {

    console.log("postData", postData);
    setIsLoading(true);
    try {
      const response = await axios.post(
        BACKENDURL + EndPoint.registeration,
        postData,
      );
      console.log("Responses:", response);

      if (response.data.success) {
        localStorage.setItem("email", postData.email);
        localStorage.setItem("Name", postData.firstName);
        localStorage.setItem("Name", postData.lastName);
        action.resetForm();
        navigate("/mailverification");
        toast.success("OTP Verification Code has been sent to your Email", {
          theme: "dark",
          // type: "success",
          autoClose: 3000,

        })
      } else {
        // toast.info(err.message ?? err ?? "OTP Send Error")
        alert(response.data.message);
      }
    } catch (error) {
      // console.log("Error", error.response?.data);
        toast.info(error.message ?? error ?? "OTP Send Error", {theme: "dark", autoClose: 3000})
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center min-h-screen max-sm:flex-col">
        <div
          className="flex flex-col w-full justify-center items-center px-12 py-12 bg-[linear-gradient(180deg,#FD5B00_0%,#FF630B_53.12%,#FF650E_67.59%,#FF6711_81.84%,#FF6915_100%)]
"
        >
          <img className="w-45 relative top-22 right-24 " src={car2} alt="" />
          <img className="w-69 relative bottom-7 left-24" src={car1} alt="" />

          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className='font-["Plus_Jakarta_Sans"] text-[#FFFFFF] text-3xl font-semibold '>
              Welcome Aboard
            </h1>
            <p className='font-["Plus_Jakarta_Sans"] text-[#FFFFFF] text-base font-normal'>
              Just a Showroom of clicks and we start
            </p>

            <svg
              width="72"
              height="24"
              viewBox="0 0 72 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="white" />
              <circle cx="12" cy="12" r="4" fill="url(#paint0_linear_2_2944)" />
              <g opacity="0.6">
                <rect x="32" y="4" width="16" height="16" rx="8" fill="white" />
              </g>
              <g opacity="0.2">
                <rect x="56" y="4" width="16" height="16" rx="8" fill="white" />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_2_2944"
                  x1="12"
                  y1="8"
                  x2="12"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF6915" />
                  <stop
                    offset="0.9997"
                    stop-color="#FF6711"
                    stop-opacity="0.814355"
                  />
                  <stop
                    offset="0.9998"
                    stop-color="#FF630B"
                    stop-opacity="0.531179"
                  />
                  <stop
                    offset="0.9999"
                    stop-color="#FF650E"
                    stop-opacity="0.675904"
                  />
                  <stop offset="1" stop-color="#FD5B00" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full gap-6 px-24 mt-7 relative">
          <h1 className='font-["Plus_Jakarta_Sans"] text-[#18345E] font-bold text-5xl leading-12'>
            Create Account
          </h1>
          <form
            action=""
            // onSubmit={(evt) => {
            //   SignUpFormSubmit(evt);
            // }}
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between max-sm:flex-col">
              <div className="flex flex-col mt-4 relative">
                <label
                  className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]'
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="bg-[#F4F2F2] p-2 rounded-xs "
                  type="text"
                  id="first_name"
                  name="firstName"
                  // value={firstName}
                  placeholder="john"
                  // onChange={(evt) => {
                  //   setFirstName(evt.target.value);

                  // }}
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && touched.firstName ? (<p className="text-red-500 text-sm">{errors.firstName}</p>) : null}
                <IoPersonOutline className="absolute right-2 top-9" />
              </div>
              <div className="flex flex-col mt-4 relative">
                <label
                  className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]'
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="bg-[#F4F2F2] p-2 rounded-xs"
                  type="text"
                  id="last_name"
                  name="lastName"
                  // value={lastName}
                  placeholder="doe"
                  // onChange={(evt) => {
                  //   setLastName(evt.target.value);

                  // }}
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastName && touched.lastName ? (<p className="text-red-500 text-sm">{errors.lastName}</p>) : null}
                <IoPersonOutline className="absolute right-2 top-9" />
              </div>
            </div>

            <div className="flex flex-col mt-4 relative">
              <label
                className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]'
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-[#F4F2F2] p-2 rounded-xs"
                type="text"
                id="email"
                name="email"
                // value={email}
                placeholder="johndoe@gmail.com"
                // onChange={(evt) => {
                //   setEmail(evt.target.value);
                // }}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (<p className="text-red-500 text-sm">{errors.email}</p>) : null}
              <MdOutlineEmail className="absolute right-2 top-9" />
            </div>
            <div className="flex flex-col mt-4 relative">
              <label
                className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]'
                htmlFor="phone"
              >
                Phone No.
              </label>
              <input
                className="bg-[#F4F2F2] p-2 rounded-xs"
                type="text"
                id="phone"
                name="phone"
                // value={phone}
                placeholder="03000000000"
                // onChange={(evt) => {
                //   setPhone(evt.target.value);
                // }}
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone ? (<p className="text-red-500 text-sm">{errors.phone}</p>) : null}
              <MdOutlineEmail className="absolute right-2 top-9" />
            </div>
            <div className="flex justify-between max-sm:flex-col">
              <div className="flex flex-col mt-6 relative">
                <label
                  className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]'
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="bg-[#F4F2F2] p-2 rounded-xs"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  // value={password}
                  placeholder="........."
                  // onChange={(evt) => {
                  //   setPassword(evt.target.value);
                  // }}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (<p className="text-red-500 text-sm">{errors.password}</p>) : null}
                {/* <LuEyeOff className='absolute right-2 top-9' /> */}
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
                <label
                  className='text-[#18345E] font-normal text-base leading-6 font-["Plus_Jakarta_Sans"]'
                  htmlFor="confpassword"
                >
                  Confirm Password
                </label>
                <input
                  className="bg-[#F4F2F2] p-2 rounded-xs"
                  type={showconfirmpassword ? "text" : "password"}
                  id="confpassword"
                  name="confPassword"
                  // value={confPassword}
                  placeholder="........."
                  // onChange={(evt) => {
                  //   setConfPassword(evt.target.value);
                  // }}
                  value={values.confPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confPassword && touched.confPassword ? (<p className="text-red-500 text-sm">{errors.confPassword}</p>) : null}

                {/* {errors.confPassword && touched.confPassword ? ( <p className="">{errors.confPassword}</p> ) : null} */}
                {/* <LuEyeOff className='absolute right-2 top-9' /> */}
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
            {/* <div className="flex flex-col my-7 gap-2">
                                <label className='flex  items-center gap-4 text-xs font-["Plus_Jakarta_Sans"]' htmlFor="">
                                    <input type="radio" />
                                    Contains at least one uppercase letter
                                </label>
                                <label className='flex  items-center gap-4 text-xs font-["Plus_Jakarta_Sans"]' htmlFor="">
                                    <input type="radio" />
                                    Contains at least one special character
                                </label>
                                <label className='flex  items-center gap-4 text-xs font-["Plus_Jakarta_Sans"]' htmlFor="">
                                    <input type="radio" />
                                    Contains at least one number
                                </label>
                                <label className='flex  items-center gap-4 text-xs font-["Plus_Jakarta_Sans"]' htmlFor="">
                                    <input type="radio" />
                                    Passowords are matching
                                </label>
                            </div> */}
            <div className="flex justify-center items-center my-4">
              <button
                className="bg-[#FF5C00] flex justify-center items-center rounded-sm  text-[#FFFFFF] text-base font-bold w-full py-2 cursor-pointer"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? (
                  <LoadingIcons.ThreeDots className="ml-6" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
            <div className="flex justify-center ">
              <h1 className="text-[#312E81CC]">
                Don't have an account?{" "}
                <button type="button"
                  className="text-[#FF5C00] cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Sign In
                </button>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
