import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Product from '../../Product/Product';
import SectionBanner from '../SectionBanner/SectionBanner';
import { useSelector } from 'react-redux';

const Phone = () => {
    const products = useSelector(state => state.product.products);
    const [phone, setPhone] = useState([]);

    useEffect(() => {
        const newData = products.filter(product => product.category === "smartphone");
        setPhone(newData);
    }, [products])

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        fetch('./sectionbanner.json')
            .then(res => res.json())
            .then(data => setBanner(data))
    }, [])
    return (
        <Box sx={{ px: 4, marginTop: '-115px' }}>
            <Container>
                <Box sx={{ textAlign: 'right' }} className="section_title">
                    <h1>Smart Phones</h1>
                    <br />
                    <p>Smart Phones with updated stocks</p>
                </Box>
            </Container>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <Grid container spacing={1}>
                            {
                                phone.slice(0, 4).map(product => <Product
                                    key={product.id}
                                    product={product}
                                ></Product>)
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        {
                            banner.slice(2, 3).map(item => <SectionBanner
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

export default Phone;