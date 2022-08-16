import {Drawer, Stack, Paper, Typography, Button} from '@mui/material';
import {useContext, useEffect} from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext";
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
    const {items, addToCart, removeFromCart} = useContext(ShoppingCartContext);

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
                sx={{ minWidth: "500px", padding: "20px" }}
                direction="column"
            >
                <Typography variant="h3">Shopping Cart</Typography>
                <div>{items.length === 0 && <Typography variant="h6">Cart is empty</Typography>}</div>
                <Typography variant="h6">Total: ${calcTotal()}</Typography>
                <Paper>

                </Paper>
            </Stack>
        </Drawer>
    )
}