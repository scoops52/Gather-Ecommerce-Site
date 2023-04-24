import React, { useState } from 'react'
import { ProductDetails } from '../ProductCard/ProductCard.styles'
import { ProductDescription, ProductImageWrapper, ProductPageImage, ProductPageInfo, ProductPageWrapper, ProductPageName, ProductPageDetails, ProductPagePrice, ButtonWrapper } from './ProductPage.styles'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increase } from '../../features/cartSlice';
import Link from 'next/link';
import ItemAdded from './ItemAdded/ItemAdded'


const ProductPage = ({product}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);


  const handleAddToCart = () => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === product.id)
    if (isItemInCart) {
      dispatch(increase(product.id))
    } else {
      dispatch(addItem(product));
    };
    setModalOpen(true)
  };


  return (
    <>
    {modalOpen && <ItemAdded setModalOpen={setModalOpen} />}
    <ProductPageWrapper>
        <ProductImageWrapper>
            <ProductPageImage src={product.image} alt='product' />
        </ProductImageWrapper>
        <ProductPageInfo>
            <ProductPageName>{product.title}</ProductPageName>
            <ProductPageDetails>
                <ProductPagePrice>${product.price}</ProductPagePrice>
                <ProductDetails>{product.rating.rate}</ProductDetails>
            </ProductPageDetails>
            <ProductDescription>{product.description}</ProductDescription>
            <ButtonWrapper>
            <Button label='Add to Cart' onClick={handleAddToCart} />
            <Link href='/products/products'>
              <Button label='Back to products' outline />
            </Link>
            </ButtonWrapper>
        </ProductPageInfo>
    </ProductPageWrapper>
  </>
  )
}

export default ProductPage