import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropDown_icon from "/dropdown_icon.png";
import Item from '../components/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <img src={props.banner} alt="" />
      <div>
        <p>
          <span className='font-semibold'>Showing 1-12</span> out of 36 Products
        </p>
        <div>
          Sort By<img src={dropDown_icon} alt="" />
        </div>
      </div>
      <div>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
