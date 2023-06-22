import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import { ChakraProvider } from '@chakra-ui/provider';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import fileUpLoad from '../services/fileUpload';
import { useDispatch } from 'react-redux';
import { registerActionAsync } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';





  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Por favor ingrese su nombre'),
    email: Yup.string().email('Debes ingresar un email').required('Este campo es obligatorio'),
    password: Yup.string().required('Password is required')
    .min(3, "La contraseña debe contener al menos 3 caracteres.")
    .max(8, "La contraseña no puede contener más de 8 caracteres"),
    
    avatar: Yup.mixed()
    .required('Por favor ingrese una imagen'),
  });


const CreateAccount = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleSubmit = async (values ) => {
   
    console.log(values);
  
    // Enviar la imagen a Cloudinary utilizando fileUpLoad
    const avatar = await fileUpLoad(values.avatar[0]);
    const newUser = {
      ...values,
      avatar: avatar
    }
    console.log(newUser);
    Swal.fire({
      icon: 'success',
      title: 'Usuario creado exitosamente',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      navigate('/');
    }).catch((error) => {
      // Manejar errores en caso de que ocurra un problema durante el registro del usuario
      console.log(error);
    });
  
    dispatch(registerActionAsync(newUser));
    
  };
  
  


  return (
    <ChakraProvider>
      
      <Box
        d="flex"
        alignItems="center"
        flexDirection="column"
        p={80}
        paddingTop="100px"
      >
        <Text fontSize="20px" fontWeight="bold">
          Create account
        </Text>
        <Formik
          initialValues={{ name: '', email: '', password: '', avatar: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form
            style={{
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
              <Text color="gray">Avatar</Text>
              <Field
                type="file"
                name="avatar"
                style={{ color: 'gray', fontSize: "13px"}}
                
              />
              <ErrorMessage name="avatar" component="div" style={{ color: 'red' }} />
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