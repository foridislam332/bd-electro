import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './TopCategorie.scss';

const TopCategorie = ({ item }) => {
    const { categorie, img } = item;
    return (
        <Grid item xs={12} md={4}>
            <Box className="categorie_item">
                <Grid container>
                    <Grid item xs={6} md={6}>
                        <h3>{categorie}</h3>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <img src={img} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default TopCategorie;