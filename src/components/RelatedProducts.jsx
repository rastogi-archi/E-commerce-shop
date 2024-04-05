import React from 'react'
import data_product from './data'
import Item from './Item'

const RelatedProducts = () => {
  return (
    <div>
      <h1 className='text-center text-xl font-semibold'>Related Products</h1>
      <hr className='product_line m-auto mt-1'/>
      <div className='flex justify-center items-center mt-3 mb-5'>
        {data_product.map((item,i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
