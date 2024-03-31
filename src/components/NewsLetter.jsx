import React from 'react'

const NewsLetter = () => {
    return (
        <div className='bg-gradient-to-b from-pink-200 to-white h-52 mt-4 w-[90%] m-auto font-[Roboto]'>
            <h2 className='pt-6 text-base font-bold text-gray-600 text-center sm:text-3xl'>Get Exclusive Offers On Your Email</h2>
            <p className='text-[11px] text-center mt-2 sm:text-base'>Subscribe to our newsletter and stay updated.</p>
            <div className='mt-2 text-center'>
                <input type="email" placeholder='Your Email id' className='border-r-0 p-2 rounded-3xl rounded-r-none text-sm sm:w-64 md:w-80' />
                <button className='border-l-0 bg-black text-white p-2 rounded-3xl rounded-l-none text-sm'>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
