import React from "react";
import { NavbarContainer, LeftContainer, RightContainer, NavbarLink } from "../styles/Navbar.style"
function Navbar() {
    return <NavbarContainer>
        {/* <NavbarInnerContainer> */}
            <LeftContainer>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/">Contact Us</NavbarLink>
                <NavbarLink to="/">About Us</NavbarLink>
            </LeftContainer>
            <RightContainer>
            </RightContainer>
      
    </NavbarContainer>
}

export default Navbar;