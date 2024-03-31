import React from 'react'
import exclusive_img from "/hero2.png";

const Exclusive = () => {
    return (
        <div className='bg-gradient-to-b from-pink-200 to-white mt-10 flex items-center justify-center h-64 w-[90%] sm:w-[80%] m-auto'>
            <div className='ml-5 w-[100%]'>
                <h2 className='font-bold text-2xl sm:text-4xl'>Exclusive</h2>
                <h2 className='font-bold text-[17px] sm:text-4xl'>Offers For You</h2>
                <p className='uppercase text-[10px] font-semibold text-gray-500 sm:text-xs'>only on best sellers products</p>
                <button className='rounded-3xl w-20 p-1 text-xs bg-red-500 mt-2 text-white cursor-pointer'>Check now</button>
            </div>
            <div>
                <img src={exclusive_img} alt="" className='h-80 sm:h-96 object-cover mb-32 mr-32' />
            </div>
        </div>
    )
}

export default Exclusive
