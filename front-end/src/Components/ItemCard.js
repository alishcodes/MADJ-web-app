import { Card, CardContent, CardMedia, Button, Typography, Stack } from '@mui/material';

const ItemCard = () => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia component="img"
                       image="https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/productsArea_itemimg_16_m.jpg?220211"
                       alt="shirt"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Product Title
                </Typography>
                <Typography varaint="body2" color="text.secondary">
                    The product description would go here. The product description would go here.
                </Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" paddingTop="20px">
                    <Typography fontWeight="bold" color="text.secondary">$10.99</Typography>
                    <Button sx={{ color: 'inherit' }}>Add to Cart</Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default ItemCard;