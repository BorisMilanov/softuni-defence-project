import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
width: 100%;
height:  80px;
background-color: paleturquoise;
display: flex;
flex-direction:column;
`;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    align-items: center;
    padding-right: 50px; 
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;    
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;