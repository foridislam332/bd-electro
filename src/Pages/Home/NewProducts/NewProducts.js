import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import SectionBanner from '../SectionBanner/SectionBanner';

const NewProducts = () => {
    // const products = useSelector(state => state.product.products)

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)

    return (
        <Box sx={{ px: 4, mt: 12 }}>
            <Container>
                <Box className="section_title">
                    <h1>New Products</h1>
                    <br />
                    <p>New products with updated stocks</p>
                </Box>
            </Container>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <Grid container spacing={1}>
                            {
                                products.map(product => <Product
                                    key={product.id}
                                    product={product}
                                ></Product>)
                            }
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <SectionBanner></SectionBanner>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default NewProducts;