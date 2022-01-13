import React from 'react';
import { Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './CheckOut.scss';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

const CheckOut = () => {
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

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const newData = { grandTotal };
    // handle submit
    const onSubmit = data => {
        const finalData = { ...data, ...newData }
        console.log(finalData)
        // axios.post('https://safe-coast-68587.herokuapp.com/orders', data)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             alert("Successful!!");
        //             reset();
        //         }
        //     })
    };

    return (
        <Container>
            <Box className="section_title">
                <h1>CheckOut</h1>
                <br />
                <p>Flap the form and Place an Order</p>
            </Box>
            <Grid container spacing={3}>
                <Grid item md={9}>
                    <Box className="checkout_form">
                        <Box className="checkout_form_title">
                            <h2>Billing Address</h2>
                        </Box>
                        <form onSubmit={handleSubmit(onSubmit)} className='m-auto'>
                            <Box sx={{ mt: 3 }} className="input_group">
                                <label htmlFor="name">Full Name <span>*</span></label>
                                <TextField
                                    className="form_input"
                                    defaultValue="MD Forid Hossain"
                                    type="text"
                                    {...register("name", { required: true })}
                                />
                            </Box>

                            <Box className="input_group">
                                <label htmlFor="email">Email <span>*</span></label>
                                <TextField
                                    id="email"
                                    className="form_input"
                                    defaultValue="Email"
                                    type="email"
                                    {...register("email", { required: true })}
                                />
                            </Box>

                            <Box sx={{ pb: 2 }} className="input_group">
                                <label htmlFor="address">Address one line <span>*</span></label>
                                <TextField
                                    id="address"
                                    className="form_input"
                                    placeholder="Address one line"
                                    type="text"
                                    {...register("Address", { required: true })}
                                />
                            </Box>

                            <Box className="min_address">
                                <TextField
                                    sx={{ width: '100%', mr: 1 }}
                                    label="Country"
                                    className="form_input"
                                    placeholder="Country"
                                    type="text"
                                    {...register("Country", { required: true })}
                                />

                                <TextField
                                    sx={{ width: '100%', ml: 1 }}
                                    label="Region / State"
                                    className="form_input"
                                    placeholder="Region / State"
                                    type="text"
                                    {...register("region", { required: true })}
                                />
                            </Box>

                            <Box className="min_address">
                                <TextField
                                    sx={{ width: '100%', mr: 1 }}
                                    label="City"
                                    className="form_input"
                                    placeholder="City"
                                    type="text"
                                    {...register("city", { required: true })}
                                />

                                <TextField
                                    sx={{ width: '100%', ml: 1 }}
                                    label="Zip Code"
                                    className="form_input"
                                    placeholder="Zip Code"
                                    type="text"
                                    {...register("post", { required: true })}
                                />
                            </Box>

                            <Button type="submit" className='btn_regular'>
                                Place an Order
                            </Button>
                        </form>
                    </Box>
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
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CheckOut;