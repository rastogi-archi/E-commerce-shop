import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const BreadCrum = (props) => {
    const { product } = props;
    return (
        <div className='text-[9px] text-gray-600 flex justify-start mt-4 ml-3 font-semibold sm:text-xs md:text-sm'>
            HOME <IoIosArrowForward className='text-xs sm:mt-1' /> SHOP <IoIosArrowForward className='text-xs sm:mt-1' /> {product.category} <IoIosArrowForward className='text-xs sm:mt-1' /> {product.name}
        </div>
    )
}

export default BreadCrum
