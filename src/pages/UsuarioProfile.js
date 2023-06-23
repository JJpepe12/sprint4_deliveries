// import { Avatar, ChakraProvider, Stack } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/avatar'
import { Stack } from '@chakra-ui/layout'
import { ChakraProvider } from '@chakra-ui/provider'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { actionGetUsertAsync } from '../redux/actions/userActions'



const UsuarioProfile = () => {


  const navigate = useNavigate();
  const users = useSelector(state => state.userStore.users);
  console.log(users)
  const dispatch = useDispatch();

useEffect(() => {
    dispatch(actionGetUsertAsync());
  }, [dispatch]);

// 

  return (
    <>
     <ChakraProvider>
    {users.map((item) => (
     <Stack direction='row'padding="8" justify="space-between" marginBottom="-50px" align="center" >       <Stack direction='column' gap= "0.5rem" >
      <h1 style={{ fontWeight: "bold", fontSize: "28px" }}>Home</h1>
      <h3 style={{ color: "gray",  fontWeight: "bold" }}>¡Qué bueno verte, {item.name}!</h3>
    </Stack>
      <Stack>
      <Avatar name='Oshigaki Kisame' src={item.name} alt='Avatar' size="lg" />
      </Stack>
    </Stack>
    ))
}
</ChakraProvider>
</>
)
}
export default UsuarioProfile