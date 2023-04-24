import { images } from '../../assets'
import React from 'react'
import NavBar from './NavBar/NavBar'
import { HeaderStyled, SectionStyled, CartIcon } from './Header.styles'
import Search from './Search/Search'
import Button from '../Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { faCartShopping, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <HeaderStyled>
      <SectionStyled>
      <Image src={images.Logo} alt='Gathr Logo' width={199} height={73}/>
        <NavBar navItems={['home', 'products', 'about', 'contact']} />
        </SectionStyled>
      <SectionStyled>
        <Search />
        <Button label='Join the community' large />
        <Link href='/cart/cart'>
          <CartIcon icon={faCartShopping} />
        </Link>
      </SectionStyled>
    </HeaderStyled>
  )
}

export default Header