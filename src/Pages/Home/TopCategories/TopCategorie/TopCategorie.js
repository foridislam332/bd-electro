import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './TopCategorie.scss';

const TopCategorie = ({ item }) => {
    const { categorie, img, discount } = item;
    return (
        <Grid item xs={12} md={4}>
            <Box className="categorie_item">
                <Grid container>
                    <Grid item xs={6} md={6}>
                        <Box className="categorie_content">
                            <Typography variant="h4">{categorie}</Typography>
                            <Button className="btn_regular">Shop Now</Button>
                        </Box>
                    </Grid>
                    <Box className="offer_style">
                        <Typography variant="body2">
                            <span className="up_span">up to</span> <p>{discount}%</p> <span className="down_span">off</span>
                        </Typography>
                    </Box>
                    <Grid item xs={6} md={6}>
                        <img src={img} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default TopCategorie;