<<<<<<< Updated upstream
import {Button, Drawer, Stack, Typography} from '@mui/material';
=======
import {Button, Drawer, Stack} from '@mui/material';
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
            <Typography variant="h3" >Shopping Cart</Typography>
            <div>{items.length === 0 && <Typography variant="h6" position= "absolute" top =" 50%"  left = "50%"
                transform = "translate(-50%, -50%) " >Cart is empty</Typography>}</div>
=======
            <h2>Cart Items</h2>
            <div>{items.length === 0 && <div> Cart is Empty</div>}</div>
>>>>>>> Stashed changes
            <Stack
                flex={1}
                spacing={2}
                sx={{ minWidth: "500px", padding: "20px" }}
            >
                {items.map((item) => (
                    <div key={item.id} className="row">
<<<<<<< Updated upstream

                        <Typography>{item.title}</Typography>
                        <Typography>{item.qty}x ${item.price}</Typography>
                        <div>
                            <Button  variant="outlined" onClick={() => addToCart(item.id, item.title, item.price)} className="add">+</Button>
                            <Button  variant="outlined" onClick={() => removeFromCart(item.id, item.title, item.price)}className="Remove">-</Button>
=======
                        {/*<img className="small" src = {item.img} alt = {item.name}></img>*/}
                        <div>{item.title}</div>
                        <div>{item.qty}X ${item.price} </div>
                        <div>
                            <Button onClick={() => addToCart(item.id, item.title, item.price)} className="add">+</Button>
                            <Button onClick={() => removeFromCart(item.id, item.title, item.price)}className="REMOVE_PRODUCT">-</Button>
>>>>>>> Stashed changes
                        </div>

                    </div>
                ))}
<<<<<<< Updated upstream


            </Stack>
            <Typography variant="h6">Total: ${calcTotal()}</Typography>
=======
                <div>Total: {calcTotal()}</div>

            </Stack>
>>>>>>> Stashed changes
            <Link to={"Checkout"} sx={{ textDecoration: 'inherit', color: 'inherit' }}>
                <Button onClick={closeCart}>Checkout</Button>
            </Link>
        </Drawer>

    )
}

