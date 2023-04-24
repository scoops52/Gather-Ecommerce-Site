import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMain } from './Layout.styles'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
        <LayoutHeader>
            <Header navItems={['Home', 'products', 'About', 'Contact']} />
        </LayoutHeader>
        <LayoutMain> {children} </LayoutMain>
        <LayoutFooter>
            <Footer />
        </LayoutFooter>
    </LayoutContainer>
  )
}

export default Layout