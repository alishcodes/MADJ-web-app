import React from 'react'
import FooterC from '../Footer/index'
import {Facebook, Instagram, Pinterest, YouTube} from "@mui/icons-material";



const Footer =()=>{
    return(
        <FooterC>
            <FooterC.Wrapper>
                <FooterC.Row>
                    <FooterC.Column>
                        <FooterC.Title>ABOUT US</FooterC.Title>
                        <FooterC.Link href="/">Elegance and simplicity made with comfort in mind</FooterC.Link>
                    </FooterC.Column>
                    <FooterC.Column>
                        <FooterC.Title>SUBSCRIBE</FooterC.Title>
                        <FooterC.Link href="/">Sign Up</FooterC.Link>

                    </FooterC.Column>
                    <FooterC.Column>
                        <FooterC.Title>INFO</FooterC.Title>
                        <FooterC.Link href="/">Contact </FooterC.Link>
                        <FooterC.Link href="/">Shipping  </FooterC.Link>
                        <FooterC.Link href="/">Return</FooterC.Link>
                    </FooterC.Column>
                    <FooterC.Column>
                        <FooterC.Title>POLICIES</FooterC.Title>
                        <FooterC.Link href="/">Privacy Policy</FooterC.Link>
                        <FooterC.Link href="/">Refund Policy</FooterC.Link>
                        <FooterC.Link href="/">Terms and Conditions</FooterC.Link>
                    </FooterC.Column>
                </FooterC.Row>
                <FooterC.Link href="/"><Instagram sx={{ color: "white"}}/> <Pinterest sx={{ color: "white"}}/> <YouTube sx={{ color: "white"}}/> <Facebook sx={{ color: "white"}}/></FooterC.Link>
            </FooterC.Wrapper>
        </FooterC>
    )
}

export default Footer;

// &copy;{new Date().getFullYear()} SPRINT INC. ALL RIGHT RESERVED