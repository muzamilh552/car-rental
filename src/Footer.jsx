import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-around bg-[#F1EEEE] pt-16 pb-10 max-sm:flex-wrap max-sm:flex-col max-sm:items-center">
                    <div className="flex flex-col gap-4 max-sm:items-center">
                        <h1 className='text-[#FF5C00] text-[32px] font-bold font-["Plus_Jakarta_Sans"] '>Showroom</h1>
                        <p className='font-medium text-[#13131399] text-base font-["Plus_Jakarta_Sans"]  max-sm:pb-2'>Our vision is to provide convenience and help increase your sales business.</p>
                    </div>
                    <div className="flex gap-16 max-sm:flex-col max-sm:gap-2">
                        <div className="flex flex-col gap-4 cursor-pointer max-sm:flex-row">
                            <h1 className='text-[#1A202C] font-semibold text-xl font-["Plus_Jakarta_Sans"] '>About</h1>
                            <h3 className='font-["Plus_Jakarta_Sans"] text-[#13131399] font-medium text-base '>How it works</h3>
                            <h3 className='font-["Plus_Jakarta_Sans"] text-[#13131399] font-medium text-base '>Featured</h3>
                            <h3 className='font-["Plus_Jakarta_Sans"] text-[#13131399] font-medium text-base '>Partnership</h3>
                            <h3 className='font-["Plus_Jakarta_Sans"] text-[#13131399] font-medium text-base '>Bussiness Relation</h3>

                        </div>
                        <div className="flex flex-col gap-4 cursor-pointer max-sm:flex-row">
                            <h1 className='text-[#1A202C] font-semibold text-xl font-["Plus_Jakarta_Sans"] '>Community</h1>
                            <h3 className='font-["Plus_Jakarta_Sans"] text-[#13131399] font-medium text-base '>Events</h3>
                            <h3 className='font-["Plus_Jakarta_Sans"] text-[#13131399] font-medium text-base '>Blog</h3>
                            <h3 className='font-["Plus_Jakarta_Sans"] text-[#13131399] font-medium text-base '>Podcast</h3>
                            <h3 className='font-["Plus_Jakarta_Sans"] text-[#13131399] font-medium text-base '>Invite a friend</h3>

                        </div>

                        <div className="flex flex-col gap-4 cursor-pointer max-sm:flex-row">
                            <h1 className='text-[#1A202C] font-semibold text-xl font-["Plus_Jakarta_Sans"] '>Socials</h1>
                            <h3 className='font-["Plus_Jakarta_Sans"] text-[#13131399] font-medium text-base '>Discord</h3>
                            <h3 className='font-["Plus_Jakarta_Sans"] text-[#13131399] font-medium text-base '>Instagram</h3>
                            <h3 className='font-["Plus_Jakarta_Sans"] text-[#13131399] font-medium text-base '>Twitter</h3>
                            <h3 className='font-["Plus_Jakarta_Sans"] text-[#13131399] font-medium text-base '>Facebook</h3>

                        </div>
                    </div>
                </div>
                <div className="w-full border-b border-gray-300 bg-[#F1EEEE]"></div>
                <div className=" flex justify-between px-20 pt-7 pb-12 bg-[#F1EEEE] max-sm:flex-row max-sm:px-4">
                    <div className="flex">
                        <h1 className='font-["Plus_Jakarta_Sans"] font-semibold text-base text-[#1A202C]'>©2022 MORENT. All rights reserved</h1>
                    </div>
                    <div className="flex gap-4 cursor-pointer">
                        <h1 className='text-[#1A202C] text-base font-semibold font-["Plus_Jakarta_Sans"] '>Privacy & Policy</h1>
                        <h1 className='text-[#1A202C] text-base font-semibold font-["Plus_Jakarta_Sans"] '>Terms & Condition</h1>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
