import { Box, Grid, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import TopCategorie from './TopCategorie/TopCategorie';

const TopCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('./topcategory.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const theme = useTheme();
    const useStyle = makeStyles({
        topCategoryBox: {
            [theme.breakpoints.down('sm')]: {
                padding: '0 !important'
            }
        }
    })
    const { topCategoryBox } = useStyle();
    return (
        <Box className={topCategoryBox} sx={{ mt: 4, px: 4, mb: 8 }}>
            <Grid container spacing={4}>
                {
                    categories.map(item => <TopCategorie
                        key={item.id}
                        item={item}
                    ></TopCategorie>)
                }
            </Grid>
        </Box>
    );
};

export default TopCategories;