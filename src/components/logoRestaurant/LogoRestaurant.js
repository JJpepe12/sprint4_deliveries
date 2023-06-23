import { Icon } from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { ChakraProvider } from '@chakra-ui/provider';
import React from 'react';
import Logo from "../assets/restaurant/PardesLogo.svg";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const LogoRestaurant = () => {
  return (
   <ChakraProvider>
           {/* Logo restaurant */}
           <Box display="flex" alignItems="left" flexDirection="row" p={6}>
          <Icon as={ChevronLeftIcon} fontSize="2rem" />
          <Box
            display="flex"
            alignItems="center"
            marginLeft="80px"
            marginTop="40px"
          >
            <Image src={Logo} alt="logo restaurant" w="150px" />

          </Box>
        </Box>
   </ChakraProvider>
  )
}

export default LogoRestaurant