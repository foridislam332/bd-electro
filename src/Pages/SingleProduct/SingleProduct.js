import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails/ProductDetails';

const SingleProduct = () => {
    const products = useSelector(state => state.product.products);
    const [singleProduct, setSingleProduct] = useState([]);
    const { productId } = useParams();
    useEffect(() => {
        const newData = products.filter(product => product.id === productId);
        setSingleProduct(newData);
    }, [productId, products])

    return (
        <Box className="product_details">
            <Container>
                <Box className="section_title">
                    <h1>Single Product</h1>
                    <br />
                    <p>Single Product with updated stocks</p>
                </Box>
            </Container>

            <Box sx={{ background: '#fff', mt: 10 }}>
                <Container>
                    <Grid container spacing={6}>
                        {
                            singleProduct.map(product => <ProductDetails
                                key={product.id}
                                product={product}
                            ></ProductDetails>)
                        }
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default SingleProduct;