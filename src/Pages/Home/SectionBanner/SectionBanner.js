import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import './SectionBanner.scss';

const SectionBanner = ({ item }) => {
    const { name, img, description, discount } = item;
    return (
        <>
            <Card className="section_card_banner">
                <CardContent className="card_content">
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>

                    <Button className="btn_regular">Shop Now</Button>

                    <Typography className="discount" variant="h6" component="div">
                        Up To <span>{discount}%</span> Discount
                    </Typography>
                </CardContent>

                <Box className="sec_banner_img">
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        width="100%"
                        image={img}
                    />
                </Box>
            </Card>
        </>
    );
};

export default SectionBanner;