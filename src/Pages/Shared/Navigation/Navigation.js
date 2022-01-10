import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Container, TextField, Tooltip, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './Navigation.scss';

const Navigation = () => {
    const theme = useTheme();
    const useStyle = makeStyles({
        topBar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '0 !important'
        },
        topBarRight: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        navBar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 !important'
        },
        nvaMenu: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLink: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        searchBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })

    const { navBar, nvaMenu, navLink, navIcon, searchBox, topBar, topBarRight } = useStyle();

    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <ListItemText>
                        <Link className={navLink} to="/home"><Button color="inherit">Home</Button></Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={navLink} to="/shop"><Button color="inherit">Shop</Button></Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={navLink} to="/collection"><Button color="inherit">Collection</Button></Link>
                    </ListItemText>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            {/* top navbar */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className={topBar}>
                        <Box>
                            <Typography variant="body2" sx={{ flexGrow: 1 }}>
                                Need help? Call Us: + 0020 500
                            </Typography>
                        </Box>
                        <Box className={topBarRight}>
                            <Typography variant="body2" sx={{ flexGrow: 1, px: 2, borderRight: '1px solid #fff' }}>
                                Help
                            </Typography>
                            <Typography variant="body2" sx={{ flexGrow: 1, px: 2, borderRight: '1px solid #fff' }}>
                                Language
                            </Typography>
                            <Typography variant="body2" sx={{ flexGrow: 1, px: 2, borderRight: '1px solid #fff' }}>
                                Wishlist
                            </Typography>
                            <Tooltip title={
                                <React.Fragment>
                                    <Typography color="inherit">Welcome TO BD-Electro</Typography>
                                    <Typography color="inherit">Profile</Typography>
                                </React.Fragment>
                            }>
                                <Box className={topBarRight}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                        Account
                                    </Typography>
                                </Box>

                            </Tooltip>

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* main navbar */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className="navigation_box" position="static">
                    <Container>
                        <Toolbar className={navBar}>
                            <Box>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <Link className={navLink} to="/">BD-Electro</Link>
                                </Typography>
                            </Box>

                            <Box className={searchBox}>
                                <TextField className="search_box_input" placeholder="Search" />
                                <Button className="search_btn"><SearchIcon /></Button>
                            </Box>

                            <Box className={nvaMenu}>
                                <span>$ 00:00</span>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                            </Box>

                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                className={navIcon}
                                onClick={() => setState(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            {/* responsive navbar */}
            <Box>
                <React.Fragment>
                    <Drawer
                        open={state}
                        anchor="right"
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </Box>
        </>
    );
};

export default Navigation;