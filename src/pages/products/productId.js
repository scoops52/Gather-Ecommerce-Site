import ProductPage from '@/components/ProductPage/ProductPage';
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';

const ProductId = () => {
  const { products } = useSelector(state => state.products)
  const router = useRouter();
  const { productId } = router.query;

  const product = products.find((product) => product.id === parseInt(productId));
  console.log(productId)
  console.log(product);


  if (router.isFallback) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  
  return (
    <ProductPage product={product} />
  )
}

export default ProductId