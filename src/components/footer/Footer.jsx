import React from 'react';
import { Flex, Image } from "@chakra-ui/react";
import houseFooter from "../../assets/icon/house.png";
import searchFooter from "../../assets/icon/search.png";
import clockFooter from "../../assets/icon/clock.png";
import peopleFooter from "../../assets/icon/people.png";
import houseFooteryellow from "../../assets/icon/houseyellow.png";
import searchFooteryellow from "../../assets/icon/searchyellow.png";
import clockFooteryellow from "../../assets/icon/clockyellow.png";
import peopleFooteryellow from "../../assets/icon/peopleyellow.png";
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const filterFooter = () => {
    navigate('/search');
  };

  const goToHome = () => {
    navigate('/home');
  };

  const goToUsers = () => {
    navigate('/profile');
  };

  const isCurrentPath = (path) => {
    return location.pathname === path;
  };

  const activeButtonStyle = {
    outline: 'none',
    position: 'relative',
  };

  const activeIndicatorStyle = {
    content: '""',
    position: 'absolute',
    top: '30px',
    right: '20px',
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '#FFE031',
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      display="flex"
      flexDirection="row"
      overflow="hidden"
      p={9}
    >
      <button
        onClick={goToHome}
        style={isCurrentPath('/home') ? activeButtonStyle : {}}
      >
        <Image
          src={isCurrentPath('/home') ? houseFooteryellow : houseFooter}
          alt="Home"
          boxSize={7}
          mr={2}
        />
        {isCurrentPath('/home') && (
          <span style={activeIndicatorStyle} />
        )}
      </button>
      <button
        onClick={filterFooter}
        style={isCurrentPath('/search') ? activeButtonStyle : {}}
      >
        <Image
          src={isCurrentPath('/search') ? searchFooteryellow : searchFooter}
          alt="Search"
          boxSize={5}
          mr={2}
        />
        {isCurrentPath('/search') && (
          <span style={activeIndicatorStyle} />
        )}
      </button>
      <button style={isCurrentPath('/clock') ? activeButtonStyle : {}}>
        <Image
          src={isCurrentPath('/clock') ? clockFooteryellow : clockFooter}
          alt="Clock"
          boxSize={8}
          mr={2}
        />
        {isCurrentPath('/clock') && (
          <span style={activeIndicatorStyle} />
        )}
      </button>
      <button
        onClick={goToUsers}
        style={isCurrentPath('/profile') ? activeButtonStyle : {}}
      >
        <Image
          src={isCurrentPath('/profile') ? peopleFooteryellow : peopleFooter}
          alt="People"
          boxSize={7}
          mr={2}
        />
        {isCurrentPath('/profile') && (
          <span style={activeIndicatorStyle} />
        )}
      </button>
    </Flex>
  );
}

export default Footer;
