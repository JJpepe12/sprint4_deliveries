// import React from "react";
// import { Formik, Form, Field } from "formik";
// import {
//   Box,
//   ChakraProvider,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   ListItem,
//   Text,
//   UnorderedList,
// } from "@chakra-ui/react";
// import { SearchIcon, TimeIcon } from "@chakra-ui/icons";
// import Footer from "../components/footer/Footer";

// const Search = () => {
//   const initialValues = {
//     search: "",
//   };

//   const onSubmit = (values) => {
//     console.log(values); // Aquí puedes realizar la lógica de búsqueda con los datos enviados
//   };

//   return (
//     <ChakraProvider>
//       <Box p={4} marginTop="20px" marginBottom="300px">
//         <Formik initialValues={initialValues} onSubmit={onSubmit}>
//           <Form>
//             <InputGroup>
//               <InputLeftElement pointerEvents="none">
//                 <SearchIcon color="gray.500" />
//               </InputLeftElement>
//               <Field
//                   as={Input}
//                 name="search"
//                 placeholder="Buscar"
//                 bg="#F2F2F2"
//                 border="none"
//                 _placeholder={{ color: "gray", padding: "16px"}}
//               />
//             </InputGroup>
//           </Form>
//         </Formik>
//         <Box marginTop="20px" p={3}>
//           <Text>Recent Search</Text>
//           <UnorderedList marginLeft="0px">
//             <ListItem color="gray" fontSize="14px">
//               <TimeIcon marginRight="4px" />
//               Search 1
//             </ListItem>
//             <ListItem color="gray" fontSize="14px">
//               <TimeIcon marginRight="4px" />
//               Search 2
//             </ListItem>
//             <ListItem color="gray" fontSize="14px">
//               <TimeIcon marginRight="4px" />
//               Search 3
//             </ListItem>
//           </UnorderedList>
//         </Box>
//       </Box>

//       <Footer />
//     </ChakraProvider>
//   );
// };

// export default Search;





// import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Card,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Swal from "sweetalert2";
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    </ChakraProvider>
  );
};

export default SearchBar;