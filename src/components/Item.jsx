import React from 'react'

const Item = (props) => {
    return (
        <div className='font-[Roboto] sm:w-52 text-left'>
            <img src={props.image} alt="" className='h-24 sm:h-32 md:h-52 m-auto' />
            <p className='text-[6px] font-bold sm:text-xs text-gray-600'>{props.name}</p>
            <div className='flex gap-2 mt-1'>
                <div className='text-[10px] sm:text-sm'>
                    ${props.new_price}
                </div>
                <div className='text-[10px] line-through text-gray-500 sm:text-sm'>
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item
