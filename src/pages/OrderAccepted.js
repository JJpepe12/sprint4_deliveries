import React from 'react'
import { loginGoogle} from '../redux/actions/authActions';
import { Button, ChakraProvider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import orderAccepted from '../assets/orderAccepted.svg'
import { FcGoogle } from 'react-icons/fc';

const OrderAccepted = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleGoogleLogin = async() => {
        await dispatch(loginGoogle());
        navigate('/')
    }

    const handleLoginClick = () => {
      navigate("/home");
    };

  return (
    <ChakraProvider>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', top: '90px', gap:"10px"}}>
        
        <p>Order is Accepted</p>
        <img src={orderAccepted} alt='Not found' width="300"></img>
        
        <Button   style={{
        marginTop:"15%",
        color:'#FF2153',
        left: '17%',
        transform: 'translate(-50%, -50%)',
        }} 
        onClick={handleLoginClick}>
          Go to Home
        </Button>
     
      </div>
    </ChakraProvider>
  )
}

export default OrderAccepted