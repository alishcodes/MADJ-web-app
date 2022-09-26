
import {Button, Divider, Drawer, Grid, Stack, Typography} from '@mui/material';
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

    /**
     * Calculates total from items in cart
     * @returns {string} total
     */
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
            <Stack
                flex={1}
                spacing={2}
            >
                <Typography variant="h3" sx={{ textAlign: "center", padding: "20px"}}>Shopping Cart</Typography>
                <Divider/>
                {items.length === 0 && <Typography variant={"h6"} sx={{ textAlign: "center", padding: "20px"}}>Cart is currently empty.</Typography>}
                <Stack
                    flex={1}
                    spacing={2}
                    sx={{ minWidth: "500px", padding: "20px" }}
                >
                    {items.map((item) => (
                        <div key={item.id} className="row">
                            <Divider flexItem/>
                            <Typography>{item.title}</Typography>
                            <Typography>{item.qty} x ${item.price}</Typography>
                            <div>
                                <Button  variant="outlined" onClick={() => addToCart(item.id, item.title, item.price)} className="add">+</Button>
                                <Button  variant="outlined" onClick={() => removeFromCart(item.id, item.title, item.price)}className="Remove">-</Button>
                        </div>
                            <Divider flexItem/>
                        </div>

                    ))}
                </Stack>
                <Divider flexItem variant="middle"/>
                <Grid
                    container
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"stretch"}

                >
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"space-between"}>
                            <Grid item>
                                <Typography variant="h6" sx={{ padding: "20px" }}>Total:</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"h6"} sx={{ padding: "20px"}}>${calcTotal()}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item alignSelf={"center"}>
                        <Link to={"/checkout"} sx={{ textDecoration: 'inherit', color: 'inherit' }}>
                            <Button variant={"outlined"} size={"large"} sx={{ margin: "20px"}} onClick={closeCart}>Checkout</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Stack>
        </Drawer>

    )
}

