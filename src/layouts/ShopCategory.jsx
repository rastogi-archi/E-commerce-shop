import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropDown_icon from "/dropdown_icon.png";
import Item from '../components/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <img src={props.banner} alt="" className='mt-2 h-28 sm:h-44 md:h-60 xl:h-72 w-[100%] sm:w-[90%] m-auto' />
      <div className='flex justify-between m-2 sm:m-8'>
        <p className='text-xs'>
          <span className='font-semibold '>Showing 1-12</span> out of 36 Products
        </p>
        <div className='flex justify-center items-center text-[10px] rounded-3xl border w-16 p-1'>
          Sort by<img src={dropDown_icon} alt="" className='h-[5px] ml-1' />
        </div>
      </div>
      <div className='grid grid-cols-3 xl:flex xl:justify-center xl:items-center xl:gap-5 xl:flex-wrap sm:ml-6 md:ml-20 xl:ml-0'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
      <div className='flex justify-center items-center m-10'>
        <button className='bg-gray-200 p-2 rounded-3xl w-32 text-xs text-gray-600'>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory
