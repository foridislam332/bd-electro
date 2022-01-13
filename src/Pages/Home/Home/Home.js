import React from 'react';
import Banner from '../Banner/Banner';
import NewProducts from '../NewProducts/NewProducts';
import SmartWatch from '../SmartWatch/SmartWatch';
import TopCategories from '../TopCategories/TopCategories';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TopCategories></TopCategories>
            <NewProducts></NewProducts>
            <SmartWatch></SmartWatch>
            <h1>home Comming</h1>
        </>
    );
};

export default Home;