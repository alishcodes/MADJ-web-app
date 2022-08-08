import {Grid, Stack, Pagination, Divider } from '@mui/material';
import ProductCard from './Components/ProductCard';
import React from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";

/**
 * Function to keep track of products added to cart.
 * To be implemented.
 *
 * @param id {int} The product object id
 */
const onAddToCartClick = (id) => {
    console.log(id);
}


/**
 * Page that displays products
 *
 * @param type {string} the type of products to display; default = empty
 */
const Catalog = ({type = ""}) => {
    const [searchParams] = useSearchParams();   //to parse URL params
    const navigate = useNavigate(); //to push a new page in history
    const dummyData = Array.from(Array(100));
    const ITEMSPERPAGE = 6;
    const MAXPAGES = Math.ceil(dummyData.length / ITEMSPERPAGE);

    //set page to URL variable "page"
    //if logically invalid, set to 1 or MAXPAGES
    let page = parseInt(searchParams.get("page"));
    if (isNaN(page) || page < 1) page = 1;
    page = page > MAXPAGES ? MAXPAGES : page;

    //takes current page and pushes in history
    //sets URL to have appropriate trail
    const handlePaginationClick = (pageNum) => {
        const trail = type === "" ? "" : "/" + type;
        navigate(`/catalog${trail}?page=${pageNum}`);
    }

    return (
        <Stack spacing={4} alignItems={"center"} justifyContent={"center"}>
            <Grid container spacing={4} justifyContent="flex-start" padding="75px" maxWidth="1500px">
                {dummyData.slice((page - 1) * ITEMSPERPAGE, page * ITEMSPERPAGE).map((currItem, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <ProductCard title={"Product Title"}
                                     img={"https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/productsArea_itemimg_16_m.jpg?220211"}
                                     desc={"The product description will go here. The product description will go here."}
                                     price={10.99}
                                     onAddToCart={() => onAddToCartClick(index)}
                        />
                    </Grid>
                ))}
            </Grid>
            <Divider flexItem/>
            <Pagination
                page={page}
                count={MAXPAGES}
                onChange={(event, pageNum) => handlePaginationClick(pageNum)}
                sx={{ paddingBottom: "25px" }}
            />
        </Stack>
    );
}

export default Catalog;