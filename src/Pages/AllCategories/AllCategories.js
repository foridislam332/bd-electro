import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import './AllCategories.scss';

const AllCategories = () => {
    const products = useSelector(state => state.product.products);
    const { categoryName } = useParams();
    const [categoryProduct, setCategoryProduct] = useState([]);

    useEffect(() => {
        const newData = products.filter(product => product.category === categoryName);
        setCategoryProduct(newData);
    }, [categoryName, products])

    return (
        <Box className="all_category" sx={{ px: 4 }}>
            <Container>
                <Box className="section_title">
                    <h1 style={{ textTransform: 'capitalize' }}>{categoryName}</h1>
                    <br />
                    <p>{categoryName} with updated stocks</p>
                </Box>
            </Container>
            <Box>
                <Grid container spacing={4}>
                    {
                        categoryProduct.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default AllCategories;