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
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './Navigation.scss';
import { useSelector } from 'react-redux';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const theme = useTheme();
    const useStyle = makeStyles({
        topBar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '0 !important',
            background: '#20b9ff !important',
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
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
            justifyContent: 'center',

            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
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

    const [navPosition, setnavPosition] = React.useState("static !important");
    const listenScrollEvent = () => {
        window.scrollY > 500 ? setnavPosition("fixed !important") : setnavPosition("static !important");
    };
    React.useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const cartProducts = useSelector(state => state.product.cart)
    const [cartCount, setCartCount] = React.useState(0);

    React.useEffect(() => {
        let count = 0;
        cartProducts.forEach(product => {
            count += product.quan;
        });
        setCartCount(count);
    }, [cartProducts, cartCount])

    const [totalPrice, setTotalPrice] = React.useState(0);
    const [totalItems, setTotalItems] = React.useState(0);
    const [deliveryCharge, setDeliveryCharge] = React.useState(0);
    const [grandTotal, setGrandTotal] = React.useState(0);

    React.useEffect(() => {
        let items = 0;
        let price = 0;
        let delivery = 0;

        cartProducts.forEach((item) => {
            items += item.quan;
            price += item.quan * item.price + delivery;
        });

        if (price >= 1) {
            delivery = 60;
        }

        if (price >= 500) {
            delivery = 50;
        }

        if (price >= 1000) {
            delivery = 20;
        }

        setTotalItems(items);
        setTotalPrice(price);
        setDeliveryCharge(delivery)
        setGrandTotal(price + delivery)

    }, [cartProducts, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    const { user, logOut } = useAuth();
    return (
        <>
            {/* top navbar */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className={topBar}>
                        <Box>
                            <Typography variant="body2" sx={{ flexGrow: 1 }}>
                                Need help? Call Us: + 020 500-660
                            </Typography>
                        </Box>
                        <Box className={topBarRight}>
                            <Typography variant="body2" sx={{ flexGrow: 1, px: 2, borderRight: '1px solid #fff' }}>
                                <Link className={navLink} to="/">Help</Link>
                            </Typography>
                            <Typography variant="body2" sx={{ flexGrow: 1, px: 2, borderRight: '1px solid #fff' }}>
                                <Link className={navLink} to="/">Language</Link>
                            </Typography>
                            <Typography variant="body2" sx={{ flexGrow: 1, px: 2, borderRight: '1px solid #fff' }}>
                                <Link className={navLink} to="/">Wishlist</Link>
                            </Typography>
                            <Tooltip title={
                                <React.Fragment>
                                    <Box className="account_top">
                                        <Typography variant="h6">Welcome To BD-Electro</Typography>
                                        <Box className="user_icon">
                                            <AccountCircle />
                                            <Typography variant="h6">{user.displayName}</Typography>
                                        </Box>
                                        {
                                            user.email ? <Box className="logout_btn"><Button onClick={logOut}>Sign Out</Button></Box> :
                                                <Box className="account_btn">
                                                    < Link className={navLink} to="/register"><Button>Join</Button></Link>
                                                    <Link className={navLink} to="/login"><Button>Sign In</Button></Link>
                                                </Box>
                                        }
                                    </Box>
                                    <Typography color="inherit">
                                        <Link className={navLink} to="/">My Account</Link>
                                    </Typography>
                                    <Typography color="inherit">
                                        <Link className={navLink} to="/">My Orders</Link>
                                    </Typography>
                                    <Typography color="inherit">
                                        <Link className={navLink} to="/carts">View Cart</Link>
                                    </Typography>
                                </React.Fragment>
                            }>
                                <Link className={navLink} to="/myAccount">
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
                                </Link>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* main navbar */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ position: navPosition }} className="navigation_box">
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
                                <span>$ {grandTotal.toFixed(2)}</span>
                                <Link className={navLink} to="/carts">
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                        <Badge badgeContent={cartCount} color="error">
                                            <ShoppingCartOutlinedIcon />
                                        </Badge>
                                    </IconButton>
                                </Link>
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