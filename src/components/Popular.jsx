import React from 'react'
import data_product from './data'
import Item from './Item'

const Popular = () => {
    return (
        <div className='font-[Roboto]'>
            <h2 className='text-center font-bold uppercase mt-7 text-2xl'>popular in women</h2>
            <div className='popular_line'></div>
            <div className='flex sm:mt-10 justify-evenly sm:gap-16 gap-2'>
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular
