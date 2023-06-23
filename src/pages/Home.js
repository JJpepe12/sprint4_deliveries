import {
  ChakraProvider,
  Image,
  Text,
  Box,
  Card,
  Stack,
  CardBody,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import geoLocation from "../assets/icon/locatio.png";
import TodaySpecial from "../assets/Promo1.png";
import restaurant1 from "../assets/restaurant/rest1.svg";
import Footer from "../components/footer/Footer";
import { FaStar } from "react-icons/fa";
import FreeDel from "../assets/freedelivery.jpg"
import conducPizza from "../assets/condupizza.jpg"
import CarruselCategory from "../components/carruselCategory/CarruselCategory";
import { useDispatch, useSelector } from 'react-redux';
import { actionGetRestaurantAsync } from '../redux/actions/restaurantAction';
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";

const Home = () => {

  const settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 5000,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  };

  const navigate = useNavigate();
  const store = useSelector(state => state.restaurantStore);
  console.log(store)
  const dispatch = useDispatch();
  const restaurants = useSelector(state => state.restaurantStore.restaurants);

  useEffect(() => {
    dispatch(actionGetRestaurantAsync());
  }, [dispatch]);

  // const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // const handleCardClick = (restaurant) => {
  //   console.log("Go details")
  //   sessionStorage.setItem('infoRestaurant', JSON.stringify(restaurant));
  //   Swal.fire(`Restaurante seleccionada: ${restaurant.name}`);
  //   navigate(`/details/${restaurant.id}`);
  //   setSelectedRestaurant(restaurant);
  // };
  return (

    <>
      <ChakraProvider>
        <Box display="flex" alignItems="left" flexDirection="column" p={6}>
          <Box display="flex" alignItems="center" p={2}>
            <Image src={geoLocation} alt="Location Icon" w="35px" ml={2} />
            <Box display="flex" flexDirection="column" p={2}>
              <Text color="#FFE031" fontSize="m" fontWeight="bold" mr={2}>
                DELIVER TO
              </Text>
              <Text>882 Well St, New-York</Text>
            </Box>
            <Box marginLeft="auto">
            <Button background="#FFE031" size="xs" color="white">
              Cerrar Sesión
            </Button>
          </Box>
          </Box>

          {/*............ CARRUSEL ENVIOS......... */}
          <Slider {...settings2} alignItems="center">
            <Box display="flex" flexDirection="row ">
              <Image
                src={TodaySpecial}
                alt="Today Special"
                borderRadius="9px"
                w="300px"
              />
            </Box>

            <Box>
              <Image
                src={conducPizza}
                alt="Domicilio"
                borderRadius="9px"
                w="325px"
                marginLeft="30px"
              />
            </Box>

            <Box>
              <Image
                src={FreeDel}
                alt="Domicilio"
                borderRadius="9px"
                w="210px"
                marginLeft="50px"
              />
            </Box>
          </Slider>

          <Text fontSize="s" color="#414141" fontWeight="light" p={3}>
            Restaurants and cafes
          </Text>

          {/*............ CARRUSEL CATEGORIAS......... */}
          <CarruselCategory />


          {/*............ CARD DE RESTAURANTES.......... */}
          {restaurants.map((restaurant) => (
            <Box
              display="flex"
              alignItems="center"
              w="358px"
              h="106px"
              p={2}
              borderRadius="18px"
              marginTop="40px"
              onClick={() => {navigate(`/detailsRestaurant/${restaurant.name}`)}}
            >
              <Card
                display="flex"
                flexDirection="row"
                overflow="hidden"
                variant="outline"
                border="none"
              >
                <Image
                  objectFit="cover"
                  // maxW={{ base: "40%", sm: "300px" }}
                  width="167px"
                  height="136px"
                  src={restaurant.img}
                  alt="restaurant1"
                  borderRadius="10px"
                  style={{
                    clipPath: "polygon(100% 0, 100% 15%, 60% 100%, 0 100%, 0 0)",
                  }}
                // borderRadius="7% 176% 124% -4%/19% 0% 87% 62%"
                />

                <Stack>
                  <CardBody padding="13px" width="224px" padding-top="17px">
                    <Text size="md"> {restaurant.name}</Text>

                    {/* Agregar rating de estrellas */}
                    <Box display="flex" alignItems="center">
                      <FaStar size={14} color="#FFC107" />
                      <FaStar size={14} color="#FFC107" />
                      <FaStar size={14} color="#FFC107" />
                      <FaStar size={14} color="#FFC107" />
                      <FaStar size={14} color="gray" />
                    </Box>

                    <Text py="2" fontSize="15px" letterSpacing="-0.3px">
                      {restaurant.time}
                    </Text>
                    <Text py="0" fontSize="xs" color="#A7A7A7">
                      {restaurant.price}
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Box>
          ))}
        </Box>

        <Footer />
      </ChakraProvider>
    </>
  );
};

export default Home;
