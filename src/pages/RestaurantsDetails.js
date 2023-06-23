import {
  Box,
  Button,
  Card,
  CardBody,
  ChakraProvider,
  Grid,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { FaStar } from "react-icons/fa";
import CarruselCategory from "../components/carruselCategory/CarruselCategory";
import { useDispatch, useSelector } from 'react-redux';
import { actionGetDishAsync } from '../redux/actions/dishesAction';
import { useNavigate, useParams } from "react-router-dom";







const RestaurantsDetails = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navegar hacia atrás en la historia del navegador
  };

  const dispatch = useDispatch();
  const { name } = useParams();
  console.log(name);


  // useEffect(() => {
  //   infoRestaurant()
  // }, [])
  useEffect(() => {
    infoRestaurant();
  }, [name]);

  const [restaurantInfo, setRestaurantInfo] = useState();
  const restaurant = useSelector((store) => store.restaurantStore);
  const { dishes } = useSelector((store) => store.dishesStore);
  console.log(dishes)


  const infoRestaurant = () => {
    // const dataDishes = dishes.products.slice();
    const dataRestaurant = restaurant.restaurants.slice();
    console.log(dataRestaurant)
    const getRestaurants = dataRestaurant.find(restaurant => restaurant.name === name);
    setRestaurantInfo(getRestaurants)
  }

  useEffect(() => {
    dispatch(actionGetDishAsync());
  }, [dispatch])

  const filterDishes = dishes.filter(item => item.restaurant === name);
  console.log(filterDishes);

  // const onFiltered = (searchValue) => {
  //   const searchParam = "category";
  //   dispatch(actionFilterFoodAsync(searchParam, searchValue));
  // };

  const home = () => {
    navigate('/home');
  }

  return (
    <>
      <ChakraProvider>
        {restaurantInfo ? (
          <Box display="flex" alignItems="left" flexDirection="row" p={6}>
            <Icon as={ChevronLeftIcon} fontSize="2rem" onClick={goBack} cursor="pointer" />
            <Box
              display="flex"
              alignItems="center"
              marginLeft="80px"
             
            >
              <Image src={restaurantInfo.logo} alt="logo restaurant" w="150px" />

            </Box>
          </Box>
        ) : (<text> Restaurante no encontrado</text>)
        }
        <Box
          display="flex"
          alignItems="center"
          w="100%" 
          h="106px"
          p={2}
          borderRadius="18px"
          marginTop="20px"
          padding={6}
        >
          {restaurantInfo ? (
            <Card display="flex" flexDirection="row" w="100%" shadow="0"
            >
              <Image
                objectFit="cover"
                width="180px"
                height="140px"
                src={restaurantInfo.img}
                alt="restaurantlogo"
                borderRadius="10px"


                style={{
                  clipPath: "polygon(100% 0, 100% 15%, 60% 100%, 0 100%, 0 0)",
                }}
              />

              <Stack>
                <CardBody padding="13px" width="200px" paddingTop="1px">
                  <Text size="md">{restaurantInfo.name}</Text>
                  <Text py="2" fontSize="10px" letterSpacing="-0.3px">
                    {restaurantInfo.description}
                  </Text>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Box display="flex" alignItems="center">
                      <FaStar size={14} color="#FFC107" />
                      <FaStar size={14} color="#FFC107" />
                      <FaStar size={14} color="#FFC107" />
                      <FaStar size={14} color="#FFC107" />
                      <FaStar size={14} color="gray" />
                    </Box>
                    <Button w="51px" h="16px">
                      <Text
                        fontSize="10px"
                        letterSpacing="-0.3px"
                        lineHeight="12px"
                      >
                        15-20 min
                      </Text>
                    </Button>
                  </Box>
                </CardBody>
              </Stack>
            </Card>
          ) : (<text> Restaurante no encontrado</text>)
          }
        </Box>
        <Stack paddingTop="30px">
          <CarruselCategory />
        </Stack>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={4}
          paddingTop="30px"
          p={6}
        >
          {filterDishes && filterDishes.length ?
            (filterDishes.map((item) => (
              <Card key={item.id}
                onClick={() => { navigate(`/foodplate/${item.name}`) }}>
                <Image width=" 300px"
                  height="150px"
                  object-fit= "contain"
                  borderRadius="10px" src={item.img} alt={item.name} />
                <CardBody>
                  <Text fontSize="14px">{item.name}</Text>
                  <Text color="gray">{item.price}</Text>
                </CardBody>
              </Card>
            ))) : (<> <text> restaurante sin servicio </text></>)
          }
        </Grid>
      </ChakraProvider>
    </>
  );
};

export default RestaurantsDetails;
