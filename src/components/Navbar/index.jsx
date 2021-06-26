import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavMenu } from './NavBarElements';

function NavBar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home'
                                scrollNav={scrollNav}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                spy={true}
                                exact="true">Home</NavLinks>

                            <NavLinks to='about'
                                scrollNav={scrollNav}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                spy={true}
                                exact="true">About</NavLinks>


                            <NavLinks to='skills'
                                scrollNav={scrollNav}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                spy={true}
                                exact="true">Skills</NavLinks>
                        </NavItem>
                    </NavMenu>


                    <MobileIcon scrollNav={scrollNav} onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default NavBar;