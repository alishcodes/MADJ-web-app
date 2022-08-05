import { Grid, Box } from '@mui/material';
import ItemCard from './Components/ItemCard';

/**
 * Function to keep track of products added to cart.
 * To be implemented.
 *
 * @param id {int} The product object id
 */
const onAddToCartClick = (id) => {
    console.log(id);
}

/*Page that displays products*/
const Catalog = () => {
    return (
        <Grid container justifyContent="center" spacing={12} padding="50px">
            {Array.from(Array(25)).map((currItem, index) => (
                <Grid item xs={12} sm={6} md={4}>
                    <ItemCard title={"Product Title"}
                              img={"https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/productsArea_itemimg_16_m.jpg?220211"}
                              desc={"The product description will go here. The product description will go here."}
                              price={10.99}
                              onAddToCart={() => onAddToCartClick(index)}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default Catalog;