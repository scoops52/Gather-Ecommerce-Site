import Button from '@/components/Button/Button';
import React from 'react'
import { ItemAddedModal, ItemAddedModalContainer, ItemAddedSectionWrapper } from './ItemAdded.styles'

const ItemAdded = ({ setModalOpen }) => {
  
  const handleClose = () => {
    setModalOpen(false);
  }
    return (
    <ItemAddedModalContainer>
      <ItemAddedModal>
        <ItemAddedSectionWrapper>
          <h1>Item Added</h1>
        </ItemAddedSectionWrapper>
        <ItemAddedSectionWrapper>
          <Button label='Return to Product' onClick={handleClose} />
        </ItemAddedSectionWrapper>
      </ItemAddedModal>
    </ItemAddedModalContainer>
  )
}

export default ItemAdded