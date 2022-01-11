import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Rating } from '@mui/material';
import './Product.scss';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, price, img, star, condition, img2 } = product;
    const url = `/home/:${id}`;

    return (
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
                    <Rating defaultValue={star} precision={0.5} size="small" readOnly />
                    <Typography className="card_title" gutterBottom variant="body1" component="div">
                        <Link to={url}>
                            {name}
                        </Link>
                    </Typography>
                    <span className="stock">Stock available</span>
                    <span className="price">$ {price}</span>
                </CardContent>
                <Box className="card_action">
                    <Button className="btn_regular">Add To Cart</Button>
                    <Button className="btn_regular">Quick</Button>
                </Box>
            </Card>
        </Grid>
    );
};

export default Product;