import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import { ChakraProvider } from '@chakra-ui/provider';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import fileUpLoad from '../components/services/fileUpLoad'; 


  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Por favor ingrese su nombre'),
    email: Yup.string().email('Debes ingresar un email').required('Este campo es obligatorio'),
    password: Yup.string().required('Password is required')
    .min(5, "La contraseña debe contener al menos 5 caracteres.")
    .max(8, "La contraseña no puede contener más de 8 caracteres"),
    
    photo: Yup.mixed()
    .required('Por favor ingrese una imagen'),
  });


const CreateAccount = () => {

  

  
  // Handle form submission
  const handleSubmit = (values) => {
    console.log(values);
  };


  return (
    <ChakraProvider>
      <Box
        d="flex"
        justifyContent="left"
        alignItems="center"
        flexDirection="column"
        h="100vh"
        p={20}
        paddingTop="100px"
      >
        <Text fontSize="20px" fontWeight="bold">
          Create account
        </Text>
        <Formik
          initialValues={{ name: '', email: '', password: '', photo: null }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form
            style={{
              width: '100%',
              maxWidth: '400px',
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Box borderBottom="1px solid gray">
              <Text color="gray"> Name</Text>
              <Field
                type="text"
                name="name"
                placeholder="Robert Foxy"
              />
              <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            </Box>

            <Box borderBottom="1px solid gray">
              <Text color="gray">Email</Text>
              <Field
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </Box>

            <Box borderBottom="1px solid gray">
              <Text color="gray">Password</Text>
              <Field
                type="password"
                name="password"
                placeholder="*********"
              />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </Box>

            <Box borderBottom="1px solid gray">
              <Text color="gray">Photo</Text>
              <Field
                type="file"
                name="photo"
                style={{ color: 'gray', fontSize: "13px"}}
              />
              <ErrorMessage name="photo" component="div" style={{ color: 'red' }} />
            </Box>

            <Button type="submit" bg="#FFE031" height="44px" borderRadius="10px" marginTop="10px">
              Sign In
            </Button>
          </Form>
        </Formik>
      </Box>
    </ChakraProvider>
  );
};

export default CreateAccount;