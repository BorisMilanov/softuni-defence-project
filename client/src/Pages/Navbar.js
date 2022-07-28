import React, { useState } from "react";
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    OpenLinksButton,
    NavbarLinkExtended

} from "../Styles/Navbar.style"
function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);

    return (<NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
            <LeftContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="/">Home</NavbarLink>
                    <NavbarLink to="/contact">Contact Us</NavbarLink>
                    <NavbarLink to="/about">About Us</NavbarLink>
                    <NavbarLinkExtended to="/auth"> Register</NavbarLinkExtended>
                    <OpenLinksButton onClick={() => {
                        setExtendNavbar((curr) => !curr)
                    }}>{extendNavbar ? <>&#10005;</> : <> &#8801;</>}</OpenLinksButton>
                </NavbarLinkContainer>
            </LeftContainer>
            <RightContainer>
            </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (<NavbarExtendedContainer>
            <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/products"> Products</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
            <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
            <NavbarLinkExtended to="/auth"> Register</NavbarLinkExtended>
        </NavbarExtendedContainer>)}
    </NavbarContainer>)
}

export default Navbar;