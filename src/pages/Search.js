import {
  ChakraProvider,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer/Footer";

// const SearchBar = ({ getPizzas }) => {
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showBackground, setShowBackground] = useState(true);
  const [showResults, setShowResults] = useState(false);

  // const pizzaData = useContext(PizzaContext);
  // console.log(pizzaData);
  const dispatch = useDispatch();
  // const { register, handleSubmit } = useForm()
  const [search, setSearch] = useState(false);
  const { dishes } = useSelector((store) => store.dishesStore);
  console.log(dishes)
  const store = useSelector(state => state.restaurantStore);
  console.log(store)

  const handleSearchPizzas = (event) => {
    setSearchTerm(event.target.value);
    setShowFilter(true);
    setShowBackground(true);

  };
  console.log(searchTerm);

  // const filteredPizzas = pizzaData
  //   ? pizzaData.filter((product) =>
  //     product.pizzaname.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  //   : [];
  // console.log(filteredPizzas);


  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm.trim() === "") {
      Swal.fire("Error", "Ingresa un término de búsqueda", "error");
      return;
    }

    // if (filteredPizzas.length) {
    //   Swal.fire("Excelente", "Pizza encontrada", "success");
    //   setShowBackground(false);
    //   setShowResults(true); // 
    // } else {
    //   Swal.fire("Error", "La pizza ingresada no existe.", "error");
    // }
  };

  return (
    <ChakraProvider>
      <Box backgroundColor="#FFE031">


        <Stack mt="5%" spacing={4}>
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            <InputGroup>
              <InputRightElement>
                <IconButton
                  variant="unstyled"
                  color="black"
                  mr="35px"
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  onClick={handleSubmit}
                />
              </InputRightElement>
              <Input
                variant="white"
                width="90%"
                margin="auto"
                type="text"
                placeholder="Pizza de Pepperoni"
                // value={searchTerm}
                onChange={handleSearchPizzas}
              />
            </InputGroup>
          </form>
        </Stack>

        {showBackground && (
          <Stack
            className="fondito_busqueda"
            align="center"
            backgroundColor="#FFE031"
            spacing={4}
            padding="50px"
            height="360px"
            position="relative"

          >
            {/* <img
            // src={LogoImage}
            alt="Logo Pizza"
            style={{ width: "90px", height: "auto" }}
          /> */}
            <Box>
              <span>Recent searches</span>
              <ul>
                <li>Ej 1</li>
                <li>Ej2</li>
                <li>Ej 3</li>
              </ul>
              <Text color="gray" fontWeight="bold">
                Busca el restaurante o el plato que más te guste
              </Text>
            </Box>

          </Stack>
        )}
        <br />
        {/* { showResults && filteredPizzas.length > 0 && (

  <Stack mt="5%" spacing={4}>
    {filteredPizzas.map((product) => (
      <ShowCards key={product.id} product={product} />
    ))}
  </Stack>
)} */}

      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default SearchBar;