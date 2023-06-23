import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Image, Text } from '@chakra-ui/react';
import iconAll from "../../assets/icon/all.png";
import iconHamburger from "../../assets/icon/hamburger_icon.svg";
import iconPizza from "../../assets/icon/pizza_icon.svg";
import iconSalad from "../../assets/icon/ensalada.png";
import iconCoffe from "../../assets/icon/taza-de-cafe.png";
import { useDispatch } from 'react-redux';
import { actionFilterRestaurantAsync, actionGetRestaurantAsync } from '../../redux/actions/restaurantAction';
import { categories } from '../../services/data';
import { actionFilterDishAsync, actionGetDishAsync } from '../../redux/actions/dishesAction';

// const categories = [
//     {
//       id: 1,
//       nombre: "All",
//       image: iconAll,
//     },
//     {
//       id: 2,
//       nombre: "Fast food",
//       image: iconHamburger,
//     },
//     {
//       id: 3,
//       nombre: "Pizzas",
//       image: iconPizza,
//     },
//     {
//       id: 4,
//       nombre: "Salad",
//       image: iconSalad,
//     },
//     {
//       id: 5,
//       nombre: "Coffee",
//       image: iconCoffe,
//     },
//   ];


const CarruselCategory = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const dispatch = useDispatch();
  const onFiltered = (searchValue) => {
    const searchParam = "category";
    dispatch(actionFilterRestaurantAsync(searchParam, searchValue));
    dispatch(actionFilterDishAsync(searchParam, searchValue));
  };
  return (


    <>

      {/*............ CARRUSEL CATEGORIAS......... */}

      <Slider {...settings}>
        <Box p={2}>
          <Button
            bg="#FFE031"
            w="100%" // El botón ocupará el 100% del espacio disponible
            maxW="250px"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.1)" }}
            onClick={() => {
              dispatch(actionGetRestaurantAsync());
              dispatch(actionGetDishAsync());
            }}> All </Button>
        </Box>
        {categories.map((category) => (
          <Box p={2}>
            <Button
              key={category.id}
              bg="#FFE031"
              w="100%" // El botón ocupará el 100% del espacio disponible
              maxW="250px"
              transition="all 0.3s"
              _hover={{ transform: "scale(1.1)" }}
              onClick={() => {
                onFiltered(category.nombre);
              }}
            >
              <Box display="flex" flexDirection="row" alignItems="center">
                <Image
                  src={category.image}
                  alt={category.nombre}
                  marginRight="4px"
                />
                <Text fontSize="xs" fontWeight="light">
                  {category.nombre}
                </Text>
              </Box>
            </Button>
          </Box>
        ))}
      </Slider>

    </>
  )
}

export default CarruselCategory