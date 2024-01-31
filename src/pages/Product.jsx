import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums';

const Product = () => {
  const {all_product}= useContext(ShopContext);

  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  console.log("productId: ", productId, "product:", product );  
  return (
    <div>
      <Breadcrums product={product}/>
    </div>
  )
}

export default Product
