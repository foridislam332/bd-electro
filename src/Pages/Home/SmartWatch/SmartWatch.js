import React from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import Product from '../../Product/Product';
import SectionBanner from '../SectionBanner/SectionBanner';

const SmartWatch = () => {
    const products = useSelector(state => state.product.products);

    return (
        <Box sx={{ px: 4 }}>
            <Container>
                <Box className="section_title">
                    <h1>Smart Watches</h1>
                    <br />
                    <p>Smart Watches with updated stocks</p>
                </Box>
            </Container>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <SectionBanner></SectionBanner>
                    </Grid>
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
                </Grid>
            </Box>
        </Box>
    );
};

export default SmartWatch;