import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
  
  const Navbar = () => {
    return (
      <>
        <Nav>
          <NavLink to='/'>
             {/* <img src={file:///C:/Users/Welcome/Pictures/logo.png} alt='logo' /> */}
              <h2>LOGO</h2> 
          </NavLink>
          {/* <Bars /> */}
          <NavMenu>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            <NavLink to='/services' activeStyle>
              Services
            </NavLink>
            <NavLink to='/contact-us' activeStyle>
              Contact Us
            </NavLink>
            <NavLink to='/KeyFeatures' activeStyle>
            KeyFeatures
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            Sign In
          </NavBtn>
        </Nav>
      </>
    );
  };
  
  export default Navbar;