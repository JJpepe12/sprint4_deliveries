import React from 'react'
import { loginGoogle } from '../redux/actions/authActions';
import { Button, ChakraProvider, Box, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import map from "../assets/map.png"
import ubication from "../assets/ubication.svg.png"
import { FcGoogle } from 'react-icons/fc';

const Location = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        await dispatch(loginGoogle());
        navigate('/')
    }

    const handleLoginClick = () => {
        navigate("/home");
    };

    const goToHome = () => {
        navigate('/home');
    };

    return (
        <ChakraProvider>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', top: '90px', gap: "10px" }}>

                <p
                 style={{
                    width:"280px",
                    textAlign:"center",
                    marginTop:"-20px"
                }}


                >Allow access to geo data on the device
mark your address on the map</p>
                <img src={map} alt='Not location' width="300"></img>
                <img src={ubication} alt='Not location' width="30"
                
                style={{
                    marginTop:"-155px"
                }}
                
                ></img>
                <Button bg="#FFE031"

                    onClick={goToHome}

                    style={{
                        marginTop: "55%",
                        color: 'black',
                        textAlign: "center",
                    }} >
                    <Box
                        display="flex"
                        alignItems="center"

                        gap="100px" flexDirection="row"
                        justifyContent="space-between" p={8} w={60} mr={50}>

                        <Text
                            style={{
                                marginLeft: "50%",
                                color: 'black',
                                textAlign: "center",
                            }}> Confirm</Text>

                    </Box>
                </Button>

            </div>
        </ChakraProvider>
    )
}

export default Location