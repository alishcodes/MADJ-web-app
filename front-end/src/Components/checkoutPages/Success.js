import {Typography, Container} from "@mui/material";

const Success = () => {
    return (
        <Container sx={{padding: "250px", textAlign: "center"}}>
            <Typography variant="h1">Order Success!</Typography>
            <Typography variant="h3">Confirmation email sent.</Typography>
        </Container>
    )
}

export default Success;