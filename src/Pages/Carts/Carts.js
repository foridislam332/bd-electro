import { Box, Container, Grid } from '@mui/material';
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

const Carts = () => {
    const carts = useSelector(state => state.product.cart);
    return (
        <Container>
            <Box className="section_title">
                <h1>Carts {carts.length}</h1>
                <br />
                <p>Manage your added products</p>
            </Box>
            <Grid container spacing={0}>
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
            </Grid>
        </Container>
    );
};

export default Carts;