import { Drawer, Stack} from '@mui/material';
import { useContext } from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext";


/**
 * Component that renders the shopping cart drawer
 *
 * @param cartOpen {boolean}
 * @returns {JSX.Element}
 * @constructor
 */
export const ShoppingCartW = ({cartOpen}) => {
    const {closeCart} = useContext(ShoppingCartContext);    //function from ShoppingCartContext to handle cart closure

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