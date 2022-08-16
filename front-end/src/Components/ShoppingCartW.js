
import {Button, Divider, Drawer, Stack, Typography} from '@mui/material';
import {useContext} from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import React from 'react';
import {Link} from "react-router-dom";


/**
 * Component that renders the shopping cart drawer
 *
 * @param cartOpen {boolean}
 * @returns {JSX.Element}
 * @constructor
 */
export const ShoppingCartW = ({cartOpen}) => {
    const {closeCart} = useContext(ShoppingCartContext);    //function from ShoppingCartContext to handle cart closure
    const {items, addToCart,removeFromCart} = useContext(ShoppingCartContext);

    const calcTotal = () => {
        let total = 0.0;
        items.map((curr) => (
            total += parseFloat(curr.qty * curr.price)
        ))

        return total.toFixed(2);
    }

    calcTotal()

    return (
        <Drawer
            anchor={"right"}
            open={cartOpen}
            onClose={closeCart}
        >

            <Typography variant="h3" >Shopping Cart</Typography>
            <div>{items.length === 0 && <Typography variant="h6" position= "absolute" top =" 50%"  left = "50%"
                transform = "translate(-50%, -50%) ">Cart is empty</Typography>}</div>

            <Stack
                flex={1}
                spacing={2}
                sx={{ minWidth: "500px", padding: "20px" }}
            >
                {items.map((item) => (
                    <div key={item.id} className="row">
                        <Divider flexItem/>
                        <Typography>{item.title}</Typography>
                        <Typography>{item.qty}x ${item.price}</Typography>
                        <div>
                            <Button  variant="outlined" onClick={() => addToCart(item.id, item.title, item.price)} className="add">+</Button>
                            <Button  variant="outlined" onClick={() => removeFromCart(item.id, item.title, item.price)}className="Remove">-</Button>
                    </div>
                        <Divider flexItem/>
                    </div>

                ))}

                    </Stack>


        <Stack>
            <Typography variant="h6">Total: ${calcTotal()} </Typography>
            <Link to={"Checkout"} sx={{ textDecoration: 'inherit', color: 'inherit' }}>
                <Button onClick={closeCart}>Continue to Checkout</Button>
            </Link>
                    </Stack>
        </Drawer>

    )
}

