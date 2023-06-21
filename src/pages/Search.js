import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Box,
  ChakraProvider,
  Input,
  InputGroup,
  InputLeftElement,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { SearchIcon, TimeIcon } from "@chakra-ui/icons";
import Footer from "../components/footer/Footer";

const Search = () => {
  const initialValues = {
    search: "",
  };

  const onSubmit = (values) => {
    console.log(values); // Aquí puedes realizar la lógica de búsqueda con los datos enviados
  };

  return (
    <ChakraProvider>
      <Box p={4} marginTop="20px" marginBottom="300px">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.500" />
              </InputLeftElement>
              <Field
                  as={Input}
                name="search"
                placeholder="Buscar"
                bg="#F2F2F2"
                border="none"
                _placeholder={{ color: "gray", padding: "16px"}}
              />
            </InputGroup>
          </Form>
        </Formik>
        <Box marginTop="20px" p={3}>
          <Text>Recent Search</Text>
          <UnorderedList marginLeft="0px">
            <ListItem color="gray" fontSize="14px">
              <TimeIcon marginRight="4px" />
              Search 1
            </ListItem>
            <ListItem color="gray" fontSize="14px">
              <TimeIcon marginRight="4px" />
              Search 2
            </ListItem>
            <ListItem color="gray" fontSize="14px">
              <TimeIcon marginRight="4px" />
              Search 3
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>

      <Footer />
    </ChakraProvider>
  );
};

export default Search;
