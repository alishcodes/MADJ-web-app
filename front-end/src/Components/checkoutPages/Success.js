import {Typography, Container} from "@mui/material";

/**
 * Component that renders the Success page upon form submission
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Success = () => {
    return (
        <Container sx={{padding: "250px", textAlign: "center"}}>
            <Typography variant="h1">Order Success!</Typography>
            <Typography variant="h3">Confirmation email sent.</Typography>
        </Container>
    )
}

export default Success;