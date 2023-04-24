import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import { ButtonWrapper, QuantityBtn, QuantityNumber, QuantityWrapper } from './CarItemQuantity.styles';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../../../../features/cartSlice';


const CartItemQuantity = ({amt, id}) => {
    const dispatch = useDispatch();


   
    const handleIncrease = () => dispatch(increase(id));
    const handleDecrease = () => {amt > 1 ? dispatch(decrease(id)) : null;}


  return (
    <QuantityWrapper>
        <QuantityNumber>{amt}</QuantityNumber>
        <ButtonWrapper>
        <QuantityBtn onClick={handleIncrease}>
            <FontAwesomeIcon icon={faSortUp}/>
        </QuantityBtn>
        <QuantityBtn onClick={handleDecrease}>
            <FontAwesomeIcon icon={faSortDown} />
        </QuantityBtn>
        </ButtonWrapper>
    </QuantityWrapper>
  )
}

export default CartItemQuantity