import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Product from '../../Product/Product';
import SectionBanner from '../SectionBanner/SectionBanner';

const Headheadphone = () => {
    const [products, setProducts] = useState([]);
    const [headphone, setHeadphone] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const newData = products.filter(product => product.category === "headphone");
        setHeadphone(newData);
    }, [products])
    return (
        <Box sx={{ px: 4 }}>
            <Container>
                <Box sx={{ textAlign: 'right' }} className="section_title">
                    <h1>Headphones</h1>
                    <br />
                    <p>Headphones with updated stocks</p>
                </Box>
            </Container>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <Grid container spacing={1}>
                            {
                                headphone.slice(0, 4).map(product => <Product
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

export default Headheadphone;