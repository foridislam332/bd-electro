import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import CameraswitchOutlinedIcon from '@mui/icons-material/CameraswitchOutlined';
import RouterOutlinedIcon from '@mui/icons-material/RouterOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

import './Categories.scss'

const Categories = () => {
    const useStyle = makeStyles({
        iconsStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    const { iconsStyle } = useStyle();

    return (
        <Box className="bg_primary" sx={{ width: '100%', maxWidth: 360 }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <Link className="nav_link" to="/categories">
                            <ListItemButton>
                                <ListItemIcon className={iconsStyle}>
                                    <MenuIcon />
                                </ListItemIcon>
                                <ListItemText primary="Categories" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <Link className="nav_link" to="/brands">
                            <ListItemButton>
                                <ListItemIcon className={iconsStyle}>
                                    <BrandingWatermarkOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Hot Brands" />
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link className="nav_link" to="/computer">
                            <ListItemButton>
                                <ListItemIcon className={iconsStyle}>
                                    <ComputerIcon />
                                </ListItemIcon>
                                <ListItemText primary="Computer & Laptop" />
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link className="nav_link" to="/phones">
                            <ListItemButton>
                                <ListItemIcon className={iconsStyle}>
                                    <PhoneIphoneIcon />
                                </ListItemIcon>
                                <ListItemText primary="Smart Phones" />
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link className="nav_link" to="/cameras">
                            <ListItemButton>
                                <ListItemIcon className={iconsStyle}>
                                    <CameraswitchOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Cameras & Drones" />
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link className="nav_link" to="/headphones">
                            <ListItemButton>
                                <ListItemIcon className={iconsStyle}>
                                    <HeadphonesOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Headphones" />
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link className="nav_link" to="/watches">
                            <ListItemButton>
                                <ListItemIcon className={iconsStyle}>
                                    <WatchOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Smart Watches" />
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link className="nav_link" to="/networking">
                            <ListItemButton>
                                <ListItemIcon className={iconsStyle}>
                                    <RouterOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Networking" />
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link className="nav_link" to="/officeElectro">
                            <ListItemButton>
                                <ListItemIcon className={iconsStyle}>
                                    <HomeWorkOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Office Electronics" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
};

export default Categories;