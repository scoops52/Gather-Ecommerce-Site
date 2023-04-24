import React from 'react';
import { NavBarStyled } from './NavBar.styles';
import NavLink from './NavLink/NavLink';

const NavBar = ({navItems}) => {
  return (
    <NavBarStyled>
        {navItems.map((item) => (
            <li key={item}>
                <NavLink label={item.toUpperCase()} href={`/${item}/${item}`} />
            </li>
        ))}
    </NavBarStyled>
  )
}

export default NavBar