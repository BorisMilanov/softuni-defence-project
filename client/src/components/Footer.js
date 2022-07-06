import "../App.css";
import React from "react";
import { FooterContainer, SocialMedia, CopyRight } from "../styles/Footer.style"
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
export default function Footer() {
    return (
        <FooterContainer>a
            <SocialMedia><LinkedInIcon/></SocialMedia>
            <CopyRight>2022</CopyRight>
        </FooterContainer>
    )
}