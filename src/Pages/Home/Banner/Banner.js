import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './Banner.scss'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation, Autoplay
} from 'swiper';
import Categories from './Categories/Categories';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);


const Banner = () => {
    const [slider, setSlider] = useState([]);
    useEffect(() => {
        fetch('./slider.json')
            .then(res => res.json())
            .then(data => setSlider(data))
    }, [])

    return (
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Categories></Categories>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box className="banner_box bg_primary">
                        <Swiper loop={true} autoplay={{ delay: 2000, disableOnInteraction: false }} pagination={{
                            "type": "progressbar"
                        }} navigation={true} className="mySwiper">
                            {
                                slider.map(slide =>
                                    <SwiperSlide data-swiper-autoplay="4000" key={slide.id}>
                                        <Grid sx={{ px: 5 }} container spacing={2}>
                                            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={6} md={6}>
                                                <Box className="slide_content">
                                                    <Typography className="special_offer" variant="h5">{slide.discount}% Special Offer</Typography>

                                                    <Typography sx={{ py: 1, width: '60%' }} variant="h3">{slide.name.slice(0, 30)}..</Typography>

                                                    <Typography sx={{ width: '45%' }} variant="body2">{slide.details.slice(0, 115)}...</Typography>

                                                    {/* <Box className="offer_style">
                                                        <Typography variant="body2">
                                                            <span className="up_span">up to</span> <p>{slide.discount}%</p> <span className="down_span">off</span>
                                                        </Typography>
                                                    </Box> */}

                                                    <Box className="slide_text_bottom">
                                                        <span className="price">$ {slide.price}</span>
                                                        <Button className="btn_regular">Shop Now</Button>
                                                    </Box>
                                                </Box>
                                            </Grid>

                                            <Grid item xs={6} md={6}>
                                                <Box className="slide_img">
                                                    <img style={{ width: '100%' }} src={slide.img} alt="" />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </SwiperSlide>)
                            }
                        </Swiper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;