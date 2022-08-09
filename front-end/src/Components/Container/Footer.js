import React from 'react'
import Footer from '../Footer'
import {Facebook, Instagram, Pinterest, YouTube} from "@mui/icons-material";



export  function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>ABOUT US</Footer.Title>
                        <Footer.Link href="/">Elegance and simplicity made with comfort in mind  </Footer.Link>


                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>SUBSCRIBE</Footer.Title>
                        <Footer.Link href="/">Sign Up</Footer.Link>

                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>INFO</Footer.Title>
                        <Footer.Link href="/">Contact </Footer.Link>
                        <Footer.Link href="/">Shipping  </Footer.Link>
                        <Footer.Link href="/">Return</Footer.Link>

                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>POLICIES</Footer.Title>
                        <Footer.Link href="/">Privacy Policy</Footer.Link>
                        <Footer.Link href="/">Refund Policy</Footer.Link>
                        <Footer.Link href="/">Terms and Conditions</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Link href="/"><Instagram sx={{ color: "white"}}/><Pinterest sx={{ color: "white"}}/><YouTube sx={{ color: "white"}}/><Facebook sx={{ color: "white"}}/></Footer.Link>
                <Footer.Link href="#">&copy;{new Date().getFullYear()} SPRINT INC. ALL RIGHT RESERVED </Footer.Link>
            </Footer.Wrapper>
        </Footer>
    )
}

