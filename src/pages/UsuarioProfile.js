import React from 'react'
import mariposa from "../assets/avatar_diana.png"
import { Avatar, Box, Button, ChakraProvider, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import {
  HiOutlinePencil
} from "react-icons/hi"



const UsuarioProfile = () => {





  //   const navigate = useNavigate();
  //   const users = useSelector(state => state.userStore.users);
  //   const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(actionGetUsertAsync());
  //   }, [dispatch]);

  //  {users.map((user) => (

  return (

    <ChakraProvider>
      <Stack direction='column' padding="8" justify="space-between" gap="20px" align="center" >
        <Stack direction='column' gap="0.5rem" >
          <h1 style={{ fontSize: "15px" }}>Profile</h1>
        </Stack>
        <Stack>
          <Avatar name='Oshigaki Kisame' src={mariposa} alt='Avatar' size="lg" />
        </Stack>



        
        <InputGroup>
          <Input fontSize="14px" placeholder="Nombre" bg="#F2F2F2" border="none" />
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

      <Box d="flex" justifyContent="center" alignItems="center" h="100vh" padding="8" align="center" marginTop="100px" >
        <Button fontSize="14px" fontWeight="ligth" bg="#FFE031" width="90%" maxWidth="90vw" height="44px">
          Save
        </Button>
      </Box>

    </ChakraProvider>
    //     <ChakraProvider>
    //     <Stack direction='row'padding="8" justify="space-between" marginBottom="-50px" align="center" >
    //       <Stack direction='column' gap= "0.5rem" >
    //       <h1 style={{ fontWeight: "bold", fontSize: "28px" }}>Home</h1>
    //       <h3 style={{ color: "gray",  fontWeight: "bold" }}>¡Qué bueno verte, {name}!</h3>
    //       </Stack>
    //       <Stack>
    //       <Avatar name='Oshigaki Kisame' src={img} alt='Avatar' size="lg" />
    //       </Stack>
    //     </Stack>
    //   </ChakraProvider>
  )
}

export default UsuarioProfile