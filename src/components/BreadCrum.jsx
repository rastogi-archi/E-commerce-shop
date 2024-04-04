import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const BreadCrum = (props) => {
    const { product } = props;
    return (
        <div className='text-[9px] text-gray-600 flex justify-start mt-4 ml-3 font-semibold sm:text-xs md:text-sm'>
            HOME <IoIosArrowForward className='h-auto' /> SHOP <IoIosArrowForward className='h-auto' /> {product.category} <IoIosArrowForward className='h-auto' /> {product.name}
        </div>
    )
}

export default BreadCrum
