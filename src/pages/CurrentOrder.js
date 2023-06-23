import React from 'react'
import { loginGoogle } from '../redux/actions/authActions';
import { Button, ChakraProvider, Icon, Box, Text} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import DeliveryTime from '../assets/DeliveryTime.svg'
import { FcGoogle } from 'react-icons/fc';
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { actionGetOrderAsync } from '../redux/actions/orderAction';
import { Flex, Spacer } from '@chakra-ui/react'
import { useEffect } from 'react';
import salad from "../assets/platosrest1/salad.png"
import reposteria from "../assets/platodrest3/reposteria-3-1.jpg"

const CurrentOrder = () => {
    const dispatch = useDispatch();
    const { order } = useSelector((store) => store.orderStore);

    useEffect(() => {
        dispatch(actionGetOrderAsync());
    }, [dispatch])


    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Navegar hacia atrás en la historia del navegador
    };

    const handleGoogleLogin = async () => {
        await dispatch(loginGoogle());
        navigate('/')
    }

    const handleLoginClick = () => {
        navigate("/home");
    };

    const goToPay= () => {
        navigate('/order');
      };

    return (
        <>
            <ChakraProvider>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', top: '25px', gap: "10px" }}>
                    <Icon as={ChevronLeftIcon} fontSize="2rem" onClick={goBack} cursor="pointer" mr={80} />
                    <p>Current Order</p>
                    <img src={DeliveryTime} alt='Not found' width="400"></img>


                    <Flex  style={{
                       marginBottom:"-50px",
                       marginTop: "-1%"
                    }}>
                        <Box p='25' w={150} >
                        <img src={salad} alt='ensalada' width="80" ></img>
                        </Box>
                        <Spacer />
                        <Box p='25'>
                        <span>x2</span>
                        </Box>
                        <Spacer />
                        <Box p='25'>
                        <span>Salad</span>
                        </Box>
                        <Spacer />
                        <Box p='25'>
                        <span>$32.00</span>
                        </Box>
                    </Flex>

                    <Flex  style={{
                       marginBottom:"-50px",
                       marginTop: "1%"
                    }}>
                        <Box p='25' w={150} >
                        <img src={reposteria} alt='postre' width="80"></img>
                        </Box>
                        <Spacer />
                        <Box p='25'>
                        <span>x1</span>
                        </Box>
                        <Spacer />
                        <Box p='25'>
                        <span>Cake</span>
                        </Box>
                        <Spacer />
                        <Box p='25'>
                        <span>$28.45</span>
                        </Box>
                    </Flex>


                    
                
                    <Flex  style={{
                       marginBottom:"-50px",
                       marginTop: "15%"
                    }}>
                        <Box p='25' w={290} >
                        Product
                        </Box>
                        <Spacer />
                        <Box p='25'>
                            $60.45
                        </Box>
                    </Flex>

                    <Flex style={{
                       marginBottom:"-50px"
                    }}>
                        <Box p='25' w={300}>
                         Delivery
                        </Box>
                        <Spacer />
                        <Box p='25'>
                            $4.50
                        </Box>
                        <Spacer />
                    </Flex>

                    
                    <Flex>
                        <Box p='25' w={290} >
                            Total
                        </Box>
                        <Spacer />
                        <Box p='25'>
                            $64.95
                        </Box>
                    </Flex>

        

                    <Button bg="#FFE031"

                        style={{
                            marginTop: "2%",
                            color: 'black',
                            // left: '1%',
                            // transform: 'translate(-50%, -50%)',
                            textAlign: "center",
                        }} 
                        
                        onClick={goToPay}>
                        <Box display="flex"
                            alignItems="center"

                            gap="100px" flexDirection="row"
                            justifyContent="space-between" p={8} w={60} mr={50}>

                            <Text
                                style={{
                                    marginLeft: "40%",
                                    color: 'black',
                                    // transform: 'translate(-50%, -50%)',
                                    textAlign: "center",
                                }}>Support</Text>

                        </Box>
                    </Button>

                </div>
            </ChakraProvider>
        </>)
}

export default CurrentOrder