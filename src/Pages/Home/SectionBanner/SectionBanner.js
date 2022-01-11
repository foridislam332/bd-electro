import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import './SectionBanner.scss';

const SectionBanner = () => {
    return (
        <>
            <Card className="section_card_banner">
                <CardContent className="card_content">
                    <Typography gutterBottom variant="h5" component="div">
                        DJI Mavic Mini - Drone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        DJI Mavic Mini - Drone FlyCam Quadcopter UAV with 2.7K Camera 3-Axis Gimbal GPS 30min Flight Time, less than 0.55lbs, Gray
                    </Typography>

                    <Button className="btn_regular">Shop Now</Button>

                    <Typography className="discount" variant="h6" component="div">
                        Up To <span>15%</span> Discount
                    </Typography>
                </CardContent>

                <Box className="sec_banner_img">
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        width="100%"
                        image="https://i.ibb.co/n8DMwk5/drone.jpg"
                    />
                </Box>
            </Card>
        </>
    );
};

export default SectionBanner;