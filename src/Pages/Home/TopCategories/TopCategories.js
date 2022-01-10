import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TopCategorie from './TopCategorie/TopCategorie';

const TopCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('./topcategory.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories)
    return (
        <>
            <Grid container spacing={4}>
                {
                    categories.map(item => <TopCategorie
                        key={item.id}
                        item={item}
                    ></TopCategorie>)
                }
            </Grid>
        </>
    );
};

export default TopCategories;