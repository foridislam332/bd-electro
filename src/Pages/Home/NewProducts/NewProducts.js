import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionBanner from '../SectionBanner/SectionBanner';
import Product from '../../Product/Product';

const NewProducts = () => {
    const products = useSelector(state => state.product.products);
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        fetch('./sectionbanner.json')
            .then(res => res.json())
            .then(data => setBanner(data))
    }, [])

    return (
        <Box sx={{ px: 4, mt: 12 }}>
            <Container>
                <Box sx={{ textAlign: 'right' }} className="section_title">
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
                                products.slice(0, 4).map(product => <Product
                                    key={product.id}
                                    product={product}
                                ></Product>)
                            }
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        {
                            banner.slice(0, 1).map(item => <SectionBanner
                                key={item.id}
                                item={item}
                            ></SectionBanner>)
                        }
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default NewProducts;