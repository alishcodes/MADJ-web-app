import {Grid, Stack, Pagination, Divider } from '@mui/material';
import ProductCard from './Components/ProductCard';
import React from 'react';
import { useEffect, useState } from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";

const onAddToCart = (id) => {
    console.log(id);
}

/**
 * Page that displays products
 *
 * @param type {string} the type of products to display; default = "" (all)
 */
const Catalog = ({type = ""}) => {
    const [searchParams] = useSearchParams();   //to parse URL params
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); //to push a new page in history
    const ITEMS_PER_PAGE = 6;

    useEffect(() => {
        fetch(type === "" ? `/api/products` : `/api/products?type=${type}`)
            .then((response) => response.json())
            .then((fetchedData) => {
                setData(fetchedData)
            })
            .catch((err) => {
                setError(err.message)
            })
    }, [type])

    const MAX_PAGES = data ? Math.ceil(data.length / ITEMS_PER_PAGE) : 1;

    //set page to URL variable "page"
    //if logically invalid, set to 1 or MAX_PAGES
    let page = parseInt(searchParams.get("page"));
    if (isNaN(page) || page < 1) page = 1;
    page = page > MAX_PAGES ? MAX_PAGES : page;

    //takes current page and pushes in history
    //sets URL to have appropriate trail
    const handlePaginationClick = (pageNum) => {
        const trail = type === "" ? "" : "/" + type;
        navigate(`/catalog${trail}?page=${pageNum}`);
    }

    return (
        <Stack spacing={4} alignItems={"center"} justifyContent={"center"}>
            {error && (
                <div>{`Could not fetch data: ${error}`}</div>
            )}
            <Grid container spacing={4} justifyContent="flex-start" padding="75px" maxWidth="1500px">
                {data && data.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE).map((currItem, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={4} key={currItem.id}>
                        <ProductCard title={currItem.title}
                                     img={"https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/productsArea_itemimg_16_m.jpg?220211"}
                                     desc={currItem.desc}
                                     price={currItem.price}
                                     onAddToCart={() => onAddToCart(currItem.id)}
                        />
                    </Grid>
                ))}
            </Grid>
            <Divider flexItem/>
            <Pagination
                page={page}
                count={MAX_PAGES}
                onChange={(event, pageNum) => handlePaginationClick(pageNum)}
                sx={{ paddingBottom: "25px" }}
            />
        </Stack>
    );
}

export default Catalog;