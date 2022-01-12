import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import Cart from './Cart/Cart';
import './Carts.scss';
import { Link } from 'react-router-dom';

const Carts = () => {
    const carts = useSelector(state => state.product.cart);

    const [totalPrice, setTotalPrice] = React.useState(0);
    const [totalItems, setTotalItems] = React.useState(0);
    const [deliveryCharge, setDeliveryCharge] = React.useState(0);
    const [grandTotal, setGrandTotal] = React.useState(0);

    React.useEffect(() => {
        let items = 0;
        let price = 0;
        let delivery = 60;

        carts.forEach((item) => {
            items += item.quan;
            price += item.quan * item.price + delivery;
        });

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

    }, [carts, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    return (
        <Container>
            <Box className="section_title">
                <h1>Carts {carts.length}</h1>
                <br />
                <p>Manage your added products</p>
            </Box>
            <Grid container spacing={3}>
                <Grid item md={9}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell align='center'><p>Price</p></TableCell>
                                    <TableCell align='center'>Quantity</TableCell>
                                    <TableCell align='center'><p>Total Price</p></TableCell>
                                    <TableCell align='center'>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    carts.map(product => <Cart
                                        key={product.id}
                                        product={product}
                                    ></Cart>)
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item md={3}>
                    <Card className="cart_calculate">
                        <CardContent className="cart_summary">
                            <Typography variant="h5">Cart Summary ({carts.length})</Typography>
                            <Box className="sub_total cart_item">
                                <Typography variant="body1">Sub-total :</Typography>
                                <span>$ {totalPrice.toFixed(2)}</span>
                            </Box>
                            <Box className="deliver cart_item">
                                <Typography variant="body1">Delivery Charges :</Typography>
                                <span>$ {deliveryCharge}</span>
                            </Box>
                            <Box className="total cart_item">
                                <Typography variant="body1">Total Amount :</Typography>
                                <span>$ {grandTotal.toFixed(2)}</span>
                            </Box>
                        </CardContent>
                        <CardActions className="cart_action">
                            <Link to="/checkout">
                                <Button className="btn_regular">proceed to checkout</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Carts;