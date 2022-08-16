import CheckoutForm from './CheckoutForm';
import ReviewProducts from "./ReviewProducts";
import {Stack} from "@mui/material";

/**
 * Component that renders checkout form and product review components.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const CheckoutPage = () => {
    return (
        <Stack direction="row" justifyContent={"center"} alignItems="center" spacing={0}>
            <CheckoutForm/>
            <ReviewProducts/>
        </Stack>
    )
}

export default CheckoutPage;