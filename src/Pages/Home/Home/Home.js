import { Container } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import TopCategories from '../TopCategories/TopCategories';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <TopCategories></TopCategories>
            <h1>home Comming</h1>
        </Container>
    );
};

export default Home;