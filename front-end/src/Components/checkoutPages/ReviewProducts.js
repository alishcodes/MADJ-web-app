
import {Divider, Grid, Paper, Stack, Typography} from "@mui/material";
import {useContext} from "react";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";

/**
 * Component that lists products to be purchased next to checkout form
 *
 * @constructor
 */
const ReviewProducts = () => {
    const {items} = useContext(ShoppingCartContext);

    const calcTotal = () => {
        let total = 0.0;
        items.map((curr) => (
            total += parseFloat((curr.qty * curr.price))
        ))

        return total.toFixed(2);
    }

    calcTotal()
    return (
        <Stack justifyContent={"center"} alignItems="center" padding={10}>
            <Paper elevation={3} sx={{ padding: "50px"}}>
                <Stack direction="column" spacing={2}>
                    {items.map((curr, index) => (
                        <Grid container direction="row" key={index}>
                            <Grid item xs={8} paddingRight={9}><Typography>{curr.title}</Typography></Grid>
                            <Grid item xs={4}><Typography>{curr.qty} x ${curr.price}</Typography></Grid>
                        </Grid>
                    ))}
                    <Divider flexItem/>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography>Total: </Typography>
                        <Typography>${calcTotal()}</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    )
}

export default ReviewProducts;