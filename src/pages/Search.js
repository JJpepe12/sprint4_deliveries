import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { actionFilterAsync } from "../redux/actions/dishesAction";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showBackground, setShowBackground] = useState(true);
  const dispatch = useDispatch();
  const { dishes } = useSelector((store) => store.dishesStore);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      Swal.fire("Error", "Ingresa un término de búsqueda", "error");
      return;
    }

    dispatch(actionFilterAsync(searchTerm));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <ChakraProvider>
      <Box backgroundColor="#FFE031">
        <Stack mt="5%" spacing={4}>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <InputRightElement>
                <IconButton
                  variant="unstyled"
                  color="black"
                  mr="35px"
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  onClick={handleSearch}
                />
              </InputRightElement>
              <Input
                variant="white"
                width="90%"
                margin="auto"
                type="text"
                placeholder="Pizza de Pepperoni"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
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
            <Box>
              <span>Recent searches</span>
              <ul>
                <li>Ej 1</li>
                <li>Ej 2</li>
                <li>Ej 3</li>
              </ul>
              <Text color="gray" fontWeight="bold">
                Busca el restaurante o el plato que más te guste
              </Text>
            </Box>
          </Stack>
        )}

        <Stack mt="5%" spacing={4}>
          {dishes.map((dish) => (
            <div key={dish.id} className="cardSearch" >
              <div className="image">
                <img src={dish.img} alt="imagen" />
              </div>
              <p>
                <h5>{dish.name}</h5>
                <span>${dish.price}</span>
              </p>
            </div>
          ))}
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

export default SearchBar;
