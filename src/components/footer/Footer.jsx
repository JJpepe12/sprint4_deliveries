import React from 'react';
import { Flex, Image } from "@chakra-ui/react";
import houseFooter from "../../assets/icon/house.png";
import searchFooter from "../../assets/icon/search.png";
import clockFooter from "../../assets/icon/clock.png";
import peopleFooter from "../../assets/icon/people.png";

const Footer = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      display="flex"
      flexDirection="row"
      overflow="hidden"
      p={9}
    >
    
        <Image src={houseFooter} alt="Home" boxSize={6} mr={2} />
        <Image src={searchFooter} alt="Search" boxSize={6} mr={2} />
        <Image src={clockFooter} alt="Clock" boxSize={6} mr={2} />
        <Image src={peopleFooter} alt="People" boxSize={6} mr={2} />
      
    </Flex>
  );
}

export default Footer;
