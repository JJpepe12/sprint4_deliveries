import {
  Box,
  Button,
  Card,
  ChakraProvider,
  Checkbox,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import salad_2 from "../assets/platosrest1/salad(2).svg";
import time from "../assets/icon/time.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionGetDishAsync } from "../redux/actions/dishesAction";

const FoodPlate = () => {
  const [tomatoChecked, setTomatoChecked] = useState(false);
  const [lettuceChecked, setLettuceChecked] = useState(false);
  const [sauceChecked, setSauceChecked] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [additionalCost, setAdditionalCost] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const dispatch = useDispatch();
  const { name } = useParams();
  console.log(name);
  const navigate = useNavigate();

  // useEffect(() => {
  //   infoRestaurant()
  // }, [])
  useEffect(() => {
    infoDish();
  }, [name]);

  const [dishInfo, setDishInfo] = useState();
  const dish = useSelector((store) => store.dishesStore);
  const dishes  = useSelector((store) => store.dishesStore);
  console.log(dishes)


  const infoDish = () => {
    const dataDishes = dishes.dishes.slice();
    // const dataRestaurant = restaurant.restaurants.slice();
    console.log(dataDishes)
    const getDishes = dataDishes.find(dish => dish.name === name);
    setDishInfo(getDishes)
  }

  useEffect(() => {
    dispatch(actionGetDishAsync());
  }, [dispatch])

  
  const handleTomatoChecked = (checked) => {
    setTomatoChecked(checked);
    if (checked) {
      setAdditionalCost(additionalCost + 2.50);
    } else {
      setAdditionalCost(additionalCost - 2.50);
    }
  };

  const handleLettuceChecked = (checked) => {
    setLettuceChecked(checked);
    if (checked) {
      setAdditionalCost(additionalCost + 1.50);
    } else {
      setAdditionalCost(additionalCost - 1.50);
    }
  };

  const handleSauceChecked = (checked) => {
    setSauceChecked(checked);
    if (checked) {
      setAdditionalCost(additionalCost + 3.00);
    } else {
      setAdditionalCost(additionalCost - 3.00);
    }
  };

  const goToCurrent = () => {
    navigate('/pay');
  };
  // const filterDishes = dishes.filter(item => item.restaurant === name);
  // console.log(filterDishes);
  return (
    <>
      <ChakraProvider>
      {dishInfo ? (
        <Card
          display="flex"
          flexDirection="column"
          variant="outline"
          borderRadius="18px"
        >
          <Image
            objectFit="cover"
            src={dishInfo.img}
            alt="salad 2"
            borderRadius="10px"
       
           
          />

          <Stack spacing={4} marginTop={6} p={4}>
            <Box>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text fontSize="22px">{dishInfo.name}</Text>

                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="row"
                  gap="8px"
                >
                  <Image src={time} alt="time" w="18px" h="18px" />
                  <Text fontSize="13px" letterSpacing="-0.3px">
                    15-20 min
                  </Text>
                </Box>
              </Box>

              <Text>
              {dishInfo.description}
              </Text>
              <Text>
              $ {dishInfo.price}
              </Text>
            </Box>

            <Box>
              <Text
                fontWeight="bold"
                fontSize="16px"
                color="gray"
                marginBottom="10px"
              >
                Additional Ingredients:
              </Text>
              <Box
                display="flex"
                alignItems="center"
                gap="8px"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center" gap="9px">
                  <Checkbox
                    colorScheme="#FFE031"
                    defaultChecked={tomatoChecked}
                    onChange={(e) => handleTomatoChecked(e.target.checked)}
                    isChecked={tomatoChecked}
                    iconColor={tomatoChecked ? "black" : "gray"}
                    bg={tomatoChecked ? "#FFE031" : "#F2F2F2"}
                    size="lg"
                  />
                  <Text>{tomatoChecked ? "Tomato" : "Tomato"}</Text>
                </Box>
                <Text>${tomatoChecked ? "2.50" : "0.00"}</Text>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                gap="8px"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center" gap="9px">
                  <Checkbox
                    colorScheme="#FFE031"
                    defaultChecked={lettuceChecked}
                    onChange={(e) => handleLettuceChecked(e.target.checked)}
                    isChecked={lettuceChecked}
                    iconColor={lettuceChecked ? "black" : "gray"}
                    bg={lettuceChecked ? "#FFE031" : "#F2F2F2"}
                    size="lg"
                  />
                  <Text>{lettuceChecked ? "Lettuce" : "Lettuce"}</Text>
                </Box>
                <Text>${lettuceChecked ? "1.50" : "0.00"}</Text>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                gap="8px"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center" gap="9px">
                  <Checkbox
                    colorScheme="#FFE031"
                    defaultChecked={sauceChecked}
                    onChange={(e) => handleSauceChecked(e.target.checked)}
                    isChecked={sauceChecked}
                    iconColor={sauceChecked ? "black" : "gray"}
                    bg={sauceChecked ? "#FFE031" : "#F2F2F2"}
                    size="lg"
                  />
                  <Text>{sauceChecked ? "Sauce" : "Sauce"}</Text>
                </Box>
                <Text>${sauceChecked ? "3.00" : "0.00"}</Text>
              </Box>
            </Box>

            {/* ...Botones Contador.... */}
            <Box
              display="flex"
              justifyContent="space-between"
              marginTop="150px"gap="15px" 
            >
              <Button bg="#F2F2F2">
                <Button
                  colorScheme="transparent"
                  onClick={decrementQuantity}
                  size="md"
                  leftIcon={
                    <Text color="black" marginRight="20px">
                      -
                    </Text>
                  }
                >
                  <Text color="black">{quantity}</Text>
                </Button>
                <Button
                  colorScheme="transparent"
                  onClick={incrementQuantity}
                  size="md"
                  rightIcon={<Text color="black">+</Text>}
                ></Button>
              </Button>

              <Button bg="#FFE031"  onClick={goToCurrent}>

                <Box  display="flex"
                alignItems="center"
                gap="100px"  flexDirection="row"
                justifyContent="space-between" p={8}>
                <Text>Add</Text>  
                <Text>$ {dishInfo.price * quantity + additionalCost}</Text>
                </Box>
                </Button>
            </Box>
          </Stack>
        </Card>
        ) : (<text> Plato no encontrado</text>)
      }
      </ChakraProvider>
    </>
  );
};

export default FoodPlate;
