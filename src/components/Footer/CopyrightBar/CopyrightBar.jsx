import Image from 'next/image'
import React from 'react'
import { CopyrightBarContainer, CopyrightBarSection } from './CopyrightBar.styles'
import { images } from '../../../assets'


const CopyrightBar = () => {
  return (
    <CopyrightBarContainer>
        <CopyrightBarSection>
            <p>2023 Gather. All rights reserved</p>
        </CopyrightBarSection>
        <CopyrightBarSection>
          <Image src={images.Logo} alt='Gathr Logo' width={199} height={73}/>
        </CopyrightBarSection>
        <CopyrightBarSection>
            Social Media
        </CopyrightBarSection>
    </CopyrightBarContainer>
  )
}

export default CopyrightBar