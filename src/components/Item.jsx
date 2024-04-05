import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className='font-[Roboto] sm:w-52 text-left ml-2 mr-2 mt-5'>
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" className='h-24 sm:h-32 md:h-52 m-auto hover:scale-105' onClick={window.scrollTo()}/></Link>
            <p className='text-[6px] font-bold sm:text-xs text-gray-600 text-center mt-2' >{props.name}</p>
            <div className='flex gap-2 mt-1 justify-start ml-2'>
                <div className='text-[8px] sm:text-sm'>
                    ${props.new_price}
                </div>
                <div className='text-[8px] line-through text-gray-500 sm:text-sm'>
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item
