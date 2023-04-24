import { images } from '@/assets'
import Button from '@/components/Button/Button'
import Link from 'next/link'
import React from 'react'
import { ButtonLink, ButtonLinkText, HomeContainer, HomeTitle } from './home.styles'

const home = () => {
  return (
    <HomeContainer image={images.Store}>
        <HomeTitle>Welcome to Gather!</HomeTitle>
        <Link href='/products/products'>
        <ButtonLink>Our Products</ButtonLink>
        </Link>
    </HomeContainer>
  )
}

export default home