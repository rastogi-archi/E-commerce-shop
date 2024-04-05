import React from 'react'
import star_icon from '/star_icon.png'
import star_dull_icon from '/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='flex gap-4 sm:mb-3 mt-4 2xl:mt-10'>
            <div className='flex w-[60%] sm:justify-center xl:mr-[-170px]'>
                <div className='flex flex-col items-start ml-3 mt-5 gap-1'>
                    <img src={product.image} alt="" className='h-10 object-cover sm:h-20' />
                    <img src={product.image} alt="" className='h-10 object-cover sm:h-20' />
                    <img src={product.image} alt="" className='h-10 object-cover sm:h-20' />
                    <img src={product.image} alt="" className='h-10 object-cover sm:h-20' />
                </div>
                <div>
                    <img src={product.image} alt="" className='h-[172px] object-cover mt-5 ml-2 sm:h-[342px]' />
                </div>
            </div>
            <div className='w-[60%]'>
                <h1 className='font-bold mt-5 text-[10px] sm:text-sm md:text-xl'>{product.name}</h1>
                <div className='flex items-center gap-1 sm:mt-1'>
                    <img src={star_icon} alt="" className='h-2 sm:h-4' />
                    <img src={star_icon} alt="" className='h-2 sm:h-4' />
                    <img src={star_icon} alt="" className='h-2 sm:h-4' />
                    <img src={star_icon} alt="" className='h-2 sm:h-4' />
                    <img src={star_dull_icon} alt="" className='h-2 sm:h-4' />
                    <p className='text-[12px] text-gray-600'>(122)</p>
                </div>
                <div className='flex gap-3 text-gray-700 sm:mt-2'>
                    <div className='text-[12px] line-through sm:text-sm'>${product.old_price}</div>
                    <div className='text-[12px] sm:text-sm'>${product.new_price}</div>
                </div>
                <div className='text-[10px] mt-1 sm:text-sm'>
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round necklineand short sleeves, worn as an undershirt or outer garment
                </div>
                <p className='text-[12px] mt-3 font-semibold sm:text-sm'>Select Size</p>
                <div className='flex gap-2 mt-1'>
                    <h1 className='bg-gray-200 p-1 text-xs sm:text-sm cursor-pointer'>S</h1>
                    <h1 className='bg-gray-200 p-1 text-xs flex justify-center items-center sm:text-sm cursor-pointer'>M</h1>
                    <h1 className='bg-gray-200 p-1 text-xs flex justify-center items-center sm:text-sm cursor-pointer'>L</h1>
                    <h1 className='bg-gray-200 p-1 text-xs flex justify-center items-center sm:text-sm cursor-pointer'>XL</h1>
                    <h1 className='bg-gray-200 p-1 text-xs flex justify-center items-center sm:text-sm cursor-pointer'>XXL</h1>
                </div>
                <button className='bg-red-500 text-white text-xs p-1 mt-2 sm:p-2 sm:w-24 sm:text-sm'>Add to cart</button>
                <p className='text-[10px] mt-1 sm:text-sm sm:mt-2'><span className='font-bold'>Category : </span>Women, T-shirt, Crop Top</p>
                <p className='text-[10px] sm:text-sm'><span className='font-bold'>Tags : </span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay
