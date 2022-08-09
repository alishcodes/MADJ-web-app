import React from 'react'
import Footerer from '../Footer/index'
import {Facebook, Instagram, Pinterest, YouTube} from "@mui/icons-material";



const Footer =()=>{
    return(
        <Footerer>
            <Footerer.Wrapper>
                <Footerer.Row>
                    <Footerer.Column>
                        <Footerer.Title>ABOUT US</Footerer.Title>
                        <Footerer.Link href="/">Elegance and simplicity made with comfort in mind  </Footerer.Link>


                    </Footerer.Column>
                    <Footerer.Column>
                        <Footerer.Title>SUBSCRIBE</Footerer.Title>
                        <Footerer.Link href="/">Sign Up</Footerer.Link>

                    </Footerer.Column>
                    <Footerer.Column>
                        <Footerer.Title>INFO</Footerer.Title>
                        <Footerer.Link href="/">Contact </Footerer.Link>
                        <Footerer.Link href="/">Shipping  </Footerer.Link>
                        <Footerer.Link href="/">Return</Footerer.Link>

                    </Footerer.Column>
                    <Footerer.Column>
                        <Footerer.Title>POLICIES</Footerer.Title>
                        <Footerer.Link href="/">Privacy Policy</Footerer.Link>
                        <Footerer.Link href="/">Refund Policy</Footerer.Link>
                        <Footerer.Link href="/">Terms and Conditions</Footerer.Link>
                    </Footerer.Column>
                </Footerer.Row>
                <Footerer.Link href="/"><Instagram sx={{ color: "white"}}/><Pinterest sx={{ color: "white"}}/><YouTube sx={{ color: "white"}}/><Facebook sx={{ color: "white"}}/></Footerer.Link>
                <Footerer.Link href="#">&copy;{new Date().getFullYear()} SPRINT INC. ALL RIGHT RESERVED </Footerer.Link>
            </Footerer.Wrapper>
        </Footerer>
    )
}

export default Footer;