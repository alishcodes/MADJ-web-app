
import {Paper, Stack, Typography} from "@mui/material";

/**
 * Component that lists products to be purchased next to checkout form
 *
 * @constructor
 */
const ReviewProducts = () => {
    return (
        <Stack justifyContent={"center"} alignItems="center" padding={10}>
            <Paper elevation={3} sx={{ padding: "50px"}}>
                <Stack direction="column" spacing={2}>
                    <Typography>Item .......... 10.99</Typography>
                    <Typography>Item .......... 10.99</Typography>
                    <Typography>Item .......... 10.99</Typography>
                    <Typography>Item .......... 10.99</Typography>
                    <Typography>Item .......... 10.99</Typography>
                    <Typography>Total: $0.00</Typography>
                </Stack>
            </Paper>
        </Stack>
    )
}

export default ReviewProducts;