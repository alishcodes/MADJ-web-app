import { Card, CardContent, CardMedia, Button, Typography, Stack } from '@mui/material';

/**
 * Component to organize product data in a catalog format.
 *
 * @returns {JSX.Element}
 * @constructor
 * @param title {string} The text above description
 * @param desc {string} The text body of the card
 * @param img {string} A url to an image
 * @param price {float}
 * @param onAddToCart Function to update if clicked
 */
const ItemCard = ({title, desc, img, price, onAddToCart}) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia component="img"
                       image={img}
                       alt={title}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography varaint="body2" color="text.secondary">
                    {desc}
                </Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" paddingTop="20px">
                    <Typography fontWeight="bold" color="text.secondary">${price}</Typography>
                    <Button sx={{ color: 'inherit' }} onClick={onAddToCart}>Add to Cart</Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default ItemCard;