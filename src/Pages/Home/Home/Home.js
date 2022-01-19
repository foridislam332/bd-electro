import React from 'react';
import Banner from '../Banner/Banner';
import Computer from '../Computer/Computer';
import DroneCamera from '../DroneCamera/DroneCamera';
import Headheadphone from '../Headphone/Headphone';
import NewProducts from '../NewProducts/NewProducts';
import Phone from '../Phone/Phone';
import SmartWatch from '../SmartWatch/SmartWatch';
import TopCategories from '../TopCategories/TopCategories';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TopCategories></TopCategories>
            <NewProducts></NewProducts>
            <SmartWatch></SmartWatch>
            <Phone></Phone>
            <Computer></Computer>
            <Headheadphone></Headheadphone>
            <DroneCamera></DroneCamera>
        </>
    );
};

export default Home;