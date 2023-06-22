import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { login, logout} from '../redux/actions/authActions';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChakraProvider } from '@chakra-ui/react'
import { UnlockIcon } from '@chakra-ui/icons'
// import Swal from "sweetalert2";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Flex,
    Button,
    Stack,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import {
    AiOutlineUser
} from "react-icons/ai"


// const LoginEmail = () => {
//     const dispatch = useDispatch();

//     const handleLogin = (e) => {
//     e.preventDefault();
//     dispatch(LoginEmail(email, password));
//     }
// }

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'El nombre de usuario debe tener al menos 3 caracteres')
        .max(15, 'El nombre de usuario no debe tener más de 15 caracteres')
        .required('El nombre de usuario es obligatorio'),
    password: Yup.string()
        .min(2, 'La contraseña debe tener al menos 2 caracteres')
        .required('La contraseña es obligatoria')
});
const initialValues = {
    username: '',
    password: '',
};
// const Form = ({ username, password, handleUser }) => {
    // const Form = ({  handleUser }) => {
const Form = () => {
    const formik = useFormik({
        initialValues,
        validationSchema,



            // Swal.fire(
            //     'excelente',
            //     `${foundUser.name} Bienvenido!!`,
            //     'success'
                
            // )
            // sessionStorage.setItem('idVuelo', JSON.stringify(resultado));
            // navigate("Home")
    //       } 
    //       setSubmitting(false);
    //     },
    //     enableReinitialize: true
      });

      //form onSubmit={handleLogin}
    return (
        <ChakraProvider>
            <form  position="absolute">
                <Flex  overflow="wrap" flexWrap="wrap" alignContent="start" flexDirection="column" spacing={10}>
                    <FormControl >
                        <FormLabel widht="90%" color={'white'} fontSize={"small"}>Disfruta de la mejor pizza creada para las personas amantes del código </FormLabel>
                    </FormControl>
                    <div>
                        <Stack spacing={4} alignItems="center">
                            <InputGroup display="flex" alignItems="center" >
                                <Input  display="flex" alignItems="center" variant='flushed'  type="text" name="username" color="black"  placeholder='Usuario' _placeholder={{ opacity: 1, color: 'gray', fontSize:"small" }}{...formik.getFieldProps('username')}  onChange={formik.handleChange} value={formik.values.username}/>
                                <FormErrorMessage>{formik.touched.username && formik.errors.username &&(<div>{formik.errors.username}</div>) }</FormErrorMessage>
                                <InputLeftElement top= "-28px" height="100px" >
                                    <AiOutlineUser color="black" />
                                </InputLeftElement>
                                
                            </InputGroup>
                            <InputGroup display="flex" alignItems="center">
                                <InputLeftElement pointerEvents='none' top= "0px">
                                    <UnlockIcon  color="black" />
                                </InputLeftElement>
                                <Input display="flex" alignItems="center" variant='flushed'  type="password" name="password" color="black"placeholder="Contraseña" _placeholder={{ opacity: 1, color: 'gray', fontSize:"small" }}{...formik.getFieldProps('password')}/>
                                <FormErrorMessage>{formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}</FormErrorMessage>
                            </InputGroup>
                        </Stack>
                        <Button  ml={5} width='90%' size='lg' mt={7} bg='#FFE031' variant='solid' type="submit" disabled={formik.isSubmitting}>
                            Iniciar sesión
                        </Button>
                    </div>
                </Flex >
            </form>
        </ChakraProvider >
    )
}

export default Form