import { Drawer, Stack, Divider, Button, IconButton } from '@mui/material';
import { useContext } from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

export const ShoppingCartW = ({cartOpen}) => {
    const {closeCart} = useContext(ShoppingCartContext);
    const {products, clearCart, total} = useContext(ShoppingCartContext);

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
            >
                <h1>Shopping Cart <IconButton onClick={closeCart} sx={{ right: 10, position: 'fixed'}}>X</IconButton></h1>
                <Divider/>
                {products.map((curr, index) => (
                    <h3 key={index}>{curr.title} ............... ${curr.price}</h3>
                ))}
                <Divider/>
                <h3>Total: ${total.toFixed(2)}</h3>
                <Button size={"large"} onClick={clearCart}>Clear</Button>
            </Stack>
        </Drawer>
    )
}