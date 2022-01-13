import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Modal, Rating } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { useDispatch } from 'react-redux';
import { addToCart, updateQuantity } from '../../redux/actions/cartProductAction';
import './Product.scss';
import useAuth from '../../Hooks/useAuth';

const Product = ({ product }) => {
    const { id, name, price, listPrice, star, condition, img, img2, img3, description } = product;
    const url = `/home/:${id}`;
    const { user } = useAuth();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: '#fff',
        boxShadow: 24,
        p: 4
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const ind = [
        <img style={{ width: '100%' }} src={img} alt={name} />,
        <img style={{ width: '100%' }} src={img2} alt={name} />,
        <img style={{ width: '100%' }} src={img3} alt={name} />
    ];
    const dispatch = useDispatch();

    return (
        <>
            <Grid item xs={12} md={3}>
                <Card className="card_container" sx={{ width: '100%' }}>
                    <span className="badge">{condition}</span>
                    <Box className="img_box">
                        <Link to={url}>
                            <CardMedia
                                component="img"
                                width="100%"
                                image={img}
                                alt={name}
                            />
                            <CardMedia
                                component="img"
                                width="100%"
                                image={img2}
                                alt={name}
                                className="hover_img"
                            />
                        </Link>
                    </Box>
                    <CardContent>
                        <Box className="rating_box">
                            <Rating defaultValue={star} precision={0.5} size="small" readOnly />
                            <span className="star_count">{star}(1)</span>
                        </Box>
                        <Typography className="card_title" gutterBottom variant="body1" component="div">
                            <Link to={url}>
                                {name}
                            </Link>
                        </Typography>
                        <span className="stock">Stock available</span>
                        <span className="price">$ {price}</span>
                    </CardContent>
                    <Box className="card_action">
                        {
                            user.email ? <Button onClick={() => dispatch(addToCart(id))} className="btn_regular">Add To Cart</Button>
                                :
                                <Link to="/login">
                                    <Button className="btn_regular">Add To Cart</Button>
                                </Link>
                        }
                        <Button onClick={handleOpen} className="btn_regular">Quick</Button>
                    </Box>
                </Card>
            </Grid>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box className="modal_carousel">
                                <Carousel className="carousel_main" autoPlay={false} IndicatorIcon={ind}>
                                    <Box className="carousel_img">
                                        <Link to={url}>
                                            <img style={{ width: '100%' }} src={img} alt={name} />
                                        </Link>
                                    </Box>
                                    <Box className="carousel_img">
                                        <Link to={url}>
                                            <img style={{ width: '100%' }} src={img2} alt={name} />
                                        </Link>
                                    </Box>
                                    <Box className="carousel_img">
                                        <Link to={url}>
                                            <img style={{ width: '100%' }} src={img3} alt={name} />
                                        </Link>
                                    </Box>
                                </Carousel>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box className="modal_content">
                                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                    <Link to={url}>
                                        {name.slice(0, 60)}
                                    </Link>
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
                                    <Box className="quantity_box">
                                        {
                                            user.email ? <Button onClick={() => dispatch(addToCart(id))} className="btn_regular">Add To Cart</Button>
                                                :
                                                <Link to="/login">
                                                    <Button className="btn_regular">Add To Cart</Button>
                                                </Link>
                                        }
                                    </Box>
                                    <Link to={url}>
                                        <Button className="btn_regular">Details</Button>
                                    </Link>
                                </Box>

                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    {description}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
};

export default Product;