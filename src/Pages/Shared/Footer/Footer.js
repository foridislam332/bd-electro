import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import './Footer.scss';

const Footer = () => {
    return (
        <Box className="footer_container">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Box>
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#fff' }}>
                                <span style={{ color: 'red' }}>B</span><span style={{ color: 'green' }}>D</span> Electro
                            </Typography>
                            <Typography variant="body1">
                                Adipisci asperiores ipsum ipsa repellat consequatur repudiandae quisquam assumenda dolor perspiciatis sit ipsum dolor amet.
                            </Typography>
                            <Box className="social_icons">
                                <Box className="icon_wrap">
                                    <FacebookOutlinedIcon />
                                </Box>
                                <Box className="icon_wrap">
                                    <TwitterIcon />
                                </Box>
                                <Box className="icon_wrap">
                                    <LinkedInIcon />
                                </Box>
                                <Box className="icon_wrap">
                                    <PinterestIcon />
                                </Box>
                                <Box className="icon_wrap">
                                    <InstagramIcon />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box className="quick_link">
                            <Typography variant="h5">
                                Quick Links
                            </Typography>
                            <Link className="footer_link" to="/">Home</Link>
                            <Link className="footer_link" to="/">About</Link>
                            <Link className="footer_link" to="/">Contact Us</Link>
                            <Link className="footer_link" to="/">Privacy Policy</Link>
                            <Link className="footer_link" to="/">Terms and Conditions</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box className="contact_box">
                            <Typography variant="h5">
                                Contact Us
                            </Typography>
                            <Box>
                                <Box className="contact_item">
                                    <PhoneIcon />
                                    <Typography variant="body1">
                                        +880 190 295 20 <br />
                                        +880 190 295 21
                                    </Typography>
                                </Box>
                                <Box className="contact_item">
                                    <AlternateEmailIcon />
                                    <Typography variant="body1">
                                        bdelectro@bdelectro.com <br />
                                        support.bde@bdelectro.com
                                    </Typography>
                                </Box>
                                <Box className="contact_item">
                                    <LocationOnOutlinedIcon />
                                    <Typography variant="body1">
                                        JBA Tawer, 1750 Kaliakoir, Gazipur, Dhaka
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box className="pay_box">
                            <Typography variant="h5">
                                Download App
                            </Typography>
                            <Box>
                                <img style={{ width: '80%' }} src="https://i.ibb.co/P5ZH67d/app-store-google-play.png" alt="app-store-google-play" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Box className="footer_bottom">
                    <Grid sx={{ alignItems: 'center' }} container>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1">
                                © 2022 All Copyrights Reserved by MD Forid Hossain
                            </Typography>
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'end' }} item xs={12} md={6}>
                            <img src="https://i.ibb.co/RP1XMPq/payment-method.png" alt="payment-method" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;