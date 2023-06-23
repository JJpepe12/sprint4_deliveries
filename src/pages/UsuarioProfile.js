import React from 'react'
import { Avatar, Box, Button, ChakraProvider, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import {
  HiOutlinePencil
} from "react-icons/hi"
import{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetUsertAsync } from '../redux/actions/userActions'
import { useNavigate } from 'react-router-dom';



const UsuarioProfile = () => {
  const navigate = useNavigate();

  const users = useSelector(state => state.user.users);
  console.log(users)
  const dispatch = useDispatch();

useEffect(() => {
    dispatch(actionGetUsertAsync());
  }, [dispatch]);



  return (

    <ChakraProvider>
      {users.map((item) => (
      <Stack direction='column' padding="8" justify="space-between" gap="20px" align="center" >
        <Stack direction='column' gap="0.5rem" >
          <h1 style={{ fontSize: "15px" }}>Profile</h1>
        </Stack>
        <Stack>
          <Avatar name='Oshigaki Kisame' src={item.avatar} alt='Avatar' size="lg" />
        </Stack>
        <InputGroup>
          <Input fontSize="14px" placeholder={item.name} bg="#F2F2F2" border="none" />
          <InputRightElement>
            <HiOutlinePencil color="gray" />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <Input fontSize="14px" placeholder="Email" bg="#F2F2F2" border="none" />
          <InputRightElement>
            <HiOutlinePencil color="gray" />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <Input  fontSize="14px" placeholder="Teléfono" bg="#F2F2F2" border="none" />
          <InputRightElement>
            <HiOutlinePencil color="gray" />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <Input fontSize="14px" placeholder="03.05.1995" bg="#F2F2F2" border="none"/>
          <InputRightElement>
            <HiOutlinePencil color="gray" />
          </InputRightElement>
        </InputGroup>
      </Stack>
))}
      <Box d="flex" justifyContent="center" alignItems="center" h="100vh" padding="8" align="center" marginTop="100px" >
        <Button onClick={() => {navigate(`/`)}} fontSize="14px" fontWeight="ligth" bg="#FFE031" width="90%" maxWidth="90vw" height="44px">
          Save
        </Button>
      </Box>

    </ChakraProvider>
    );
  };
export default UsuarioProfile