import { Button, TableCell, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, updateQuantity } from '../../../redux/actions/cartProductAction';

const Cart = ({ product }) => {
    const { id, name, img, quan, price } = product;
    const dispatch = useDispatch();

    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let multulyPrice = price * quan;
        setTotalPrice(multulyPrice.toFixed(2));
    }, [quan, price])

    const [input, setInput] = useState(product.quan);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        dispatch(updateQuantity(product.id, e.target.value));
    };

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                <Box className="cart_text">
                    <img width={70} src={img} alt="" />
                    <span>{name.slice(0, 40)}</span>
                </Box>
            </TableCell>
            <TableCell align="center">$ {price}</TableCell>
            <TableCell align="center">
                <Box className="quantity_box">
                    <input onChange={onChangeHandler} min="1" type="number" value={input} />
                </Box>
            </TableCell>
            <TableCell align="center">$ {totalPrice}</TableCell>
            <TableCell align="center">
                <Button onClick={() => dispatch(removeProduct(id))}><DeleteForeverOutlinedIcon sx={{ color: 'red' }} /></Button>
            </TableCell>
        </TableRow>
    );
};

export default Cart;