import React from 'react';
import car from './SignIn/car.png'

const UserSelection = () => {
    return (
        <>
            <div className="flex justify-center min-h-screen max-sm:flex-col">
                <div className="flex flex-col w-full justify-center items-center px-12 py-13 bg-[linear-gradient(180deg,#FD5B00_0%,#FF630B_53.12%,#FF650E_67.59%,#FF6711_81.84%,#FF6915_100%)]
     ">
                    <img className='w-full' src={car} alt="" />

                    <h1 className='font-["Plus_Jakarta_Sans"] text-[#FFFFFF] text-3xl font-semibold '>User Selection</h1>
                </div>

                <div className="flex flex-col justify-center items-center w-full px-24 relative max-sm:mt-12">
                    <div className="flex justify-center items-center">
                        <button className='bg-[#FF5C00] flex justify-center items-center rounded-sm  text-[#FFFFFF] text-base font-bold px-41 py-2 cursor-pointer max-sm:px-40'>Rent a Car</button>
                    </div>
                    <div className="flex justify-center items-center mt-12">
                        <button className='bg-[#FF5C00] flex justify-center items-center rounded-sm  text-[#FFFFFF] text-base font-bold px-34 py-2 cursor-pointer max-sm:px-34'>Own a Showroom</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default UserSelection;
