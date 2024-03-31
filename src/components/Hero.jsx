import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import hero_image from "/hero1.png";

const Hero = () => {
    return (
        <main className='h-80 bg-gradient-to-b from-pink-200 to-white mt-2 font-[Roboto] flex items-center justify-center'>
            <div className='ml-2 sm:ml-32 md:ml-36 xl:ml-80'>
                <p className='uppercase text-xs font-medium mb-1 sm:mb-0 sm:text-sm'>new arrivals only</p>
                <div className='flex items-center  mt-[-20px] sm:mt-[-30px]'>
                    <p className=' text-3xl sm:text-4xl font-bold md:text-5xl'>new</p>
                    <img src="\hand.png" alt="" className='h-20 md:h-32' />
                </div>
                <p className='text-3xl font-bold mt-[-20px] md:text-5xl'>collections</p>
                <p className='text-3xl font-bold md:text-5xl'>for everyone</p>
                <button className='flex justify-center items-center rounded-3xl bg-red-500 p-1 w-40 mt-2 text-white gap-1'>Latest Collection <FaArrowRightLong /></button>
            </div>
            <div className='w-[40%]'>
                <img src={hero_image} alt="" className='h-80 object-cover ml-2 md:h-96' />
            </div>
        </main>
    )
}

export default Hero
