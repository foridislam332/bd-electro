import React, { useState } from 'react';
import { Button, Box, Container, TextField, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.scss';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { registerUser } = useAuth();
    const [regData, setRegData] = useState('');
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegData = { ...regData };
        newRegData[field] = value;
        setRegData(newRegData)
    }

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        if (regData.password !== regData.password2) {
            alert('Password did not Match');
            return
        }
        e.preventDefault()

        registerUser(regData.name, regData.email, regData.password, location, navigate)
        console.log(regData.name)
    }
    return (
        <Container className="register_continer">
            <Box className="register_box">
                <Box className="box_title">
                    <h1>Register</h1>
                </Box>
                <form onSubmit={handleOnSubmit}>
                    <Box>
                        <TextField
                            className="input_field"
                            label="Your Full Name"
                            variant="standard"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                        />
                    </Box>
                    <Box>
                        <TextField
                            className="input_field"
                            label="Enter your email"
                            variant="standard"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                        />
                    </Box>
                    <Box>
                        <TextField
                            className="input_field"
                            label="Password"
                            variant="standard"
                            name="password"
                            type="password"
                            onBlur={handleOnBlur}
                        />
                    </Box>
                    <Typography variant="body2">Passwords must be at least 6 characters.</Typography>
                    <Box>
                        <TextField
                            className="input_field"
                            label="Confirm Password"
                            variant="standard"
                            name="password2"
                            type="password"
                            onBlur={handleOnBlur}
                        />
                    </Box>
                    <Button className="btn_regular" type="submit">Create Your Account</Button>
                </form>
                <Box className="login_bottom">
                    <Typography sx={{ textAlign: 'center', mt: 3, mb: 1 }} variant="body1">Already have an account?</Typography>
                    <Link style={{ textDecoration: 'none' }} to="/login">
                        <Button className="btn_regular">Sign In</Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;