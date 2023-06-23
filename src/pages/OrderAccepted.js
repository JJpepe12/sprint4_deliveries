import React from 'react'
import { Button, ChakraProvider, Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import orderAccepted from '../assets/orderAccepted.svg'

const OrderAccepted = () => {
  const navigate = useNavigate();

  const goToLocation = () => {
    navigate('/location');
  };

  return (
    <ChakraProvider>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', top: '90px', gap: "10px" }}>

        <p>Order is Accepted</p>
        <img src={orderAccepted} alt='Not found' width="300"></img>


        <Button bg="#FFE031"

          onClick={goToLocation}

          style={{
            marginTop: "45%",
            color: 'black',
            textAlign: "center",
          }} >
          <Box display="flex"
            alignItems="center"

            gap="100px" flexDirection="row"
            justifyContent="space-between" p={8} w={60} mr={50}>

            <Text
              style={{
                marginLeft: "40%",
                color: 'black',
                textAlign: "center",
              }}>Follow Order</Text>

          </Box>
        </Button>

      </div>
    </ChakraProvider>
  )
}

export default OrderAccepted