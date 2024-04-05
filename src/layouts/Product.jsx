import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import BreadCrum from '../components/BreadCrum';
import ProductDisplay from '../components/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
