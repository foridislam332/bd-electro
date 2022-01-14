import { Button, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { addToCart } from '../../../redux/actions/cartProductAction';
import './ProductDetails.scss';

const ProductDetails = ({ product }) => {
    const { id, name, price, listPrice, star, condition, img, img2, img3, description, brand } = product;

    const { user } = useAuth();
    const dispatch = useDispatch();

    const ind = [
        <img style={{ width: '100%' }} src={img} alt={name} />,
        <img style={{ width: '100%' }} src={img2} alt={name} />,
        <img style={{ width: '100%' }} src={img3} alt={name} />
    ];
    return (
        <>
            <Grid item md={6}>
                <Box className="modal_carousel">
                    <Carousel className="carousel_main" autoPlay={false} IndicatorIcon={ind}>
                        <Box className="carousel_img">
                            <img style={{ width: '100%' }} src={img} alt={name} />
                        </Box>
                        <Box className="carousel_img">
                            <img style={{ width: '100%' }} src={img2} alt={name} />
                        </Box>
                        <Box className="carousel_img">
                            <img style={{ width: '100%' }} src={img3} alt={name} />
                        </Box>
                    </Carousel>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box className="modal_content">
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    {/* rating_box */}
                    <Box className="rating_box">
                        <Rating defaultValue={star} precision={0.5} size="small" readOnly />
                        <span className="star_count">{star}(1)</span>
                    </Box>
                    {/* price_box */}
                    <Box className="price_box">
                        <span className="list_price">Usd {listPrice}</span>
                        <span className="price">Usd {price}</span>
                    </Box>

                    <Box className="action_box">
                        <Typography sx={{ textTransform: 'uppercase', mt: 3, color: '#7c4cf8', fontStyle: 'italic' }} variant="body1">STOCK AVAILABLE</Typography>
                        <Box className="quantity_box">
                            {
                                user.email ? <Button onClick={() => dispatch(addToCart(id))} className="btn_regular">Add To Cart</Button>
                                    :
                                    <Link to="/login">
                                        <Button className="btn_regular">Add To Cart</Button>
                                    </Link>
                            }
                        </Box>
                    </Box>

                    <Typography sx={{ textTransform: 'uppercase', mt: 3 }} variant="body1">
                        Brand : {brand}
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {description}
                    </Typography>
                </Box>
            </Grid>
        </>
    );
};

export default ProductDetails;