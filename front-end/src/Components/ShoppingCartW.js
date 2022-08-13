import { Drawer, Stack, Divider, Button, IconButton } from '@mui/material';
import { useContext } from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

export const ShoppingCartW = ({cartOpen}) => {
    const {closeCart} = useContext(ShoppingCartContext);

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
            </Stack>
        </Drawer>
    )
}