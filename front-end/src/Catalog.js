import { Grid, Box, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import ItemCard from './Components/ItemCard';

{/*Page that displays products*/}
const Catalog = () => {

    return (
        <Grid container justifyContent="center" spacing={10} padding={"25px"} paddingTop={"50px"}>
            {Array.from(Array(25)).map((index) => (
                <Grid item>
                    <ItemCard/>
                </Grid>
            ))}
        </Grid>
    );
}

export default Catalog;