import React, {useState} from 'react'
import logo from "../assets/logo.svg";
import { Button, Flex, FormErrorMessage, HStack, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { loginGoogle } from "../redux/actions/authActions";
import { AiOutlineUser } from "react-icons/ai"
import { UnlockIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../redux/actions/authActions';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
    console.log("Ingresaste con Google")
  };

  return (
    <section>
      <Stack alignItems="center" p={5}>
        <img src={logo} alt="logo delivery" />
        <Text fontSize="2rem">Sign in</Text>
        <Text textAlign="center">
          Login or create an account with your phone number to start ordering
        </Text>

        <form onSubmit={handleLogin}>
          <Flex flexDirection="column" >
            <Stack spacing={6} >
              <InputGroup display="flex" alignItems="center" >
                <Input variant='flushed'  type="text" name="username" color="black"  placeholder='Usuario' _placeholder={{ fontSize:"small" }} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FormErrorMessage>{formik.touched.username && formik.errors.username && (<div>{formik.errors.username}</div>)}</FormErrorMessage>
                <InputLeftElement top= "-28px" height="100px" >
                    <AiOutlineUser color="black" />
                </InputLeftElement>
              </InputGroup>

              <InputGroup display="flex" alignItems="center">
                <InputLeftElement>
                    <UnlockIcon  color="black" />
                </InputLeftElement>
                <Input variant='flushed' type="password" name="password" color="black"placeholder="Contraseña" _placeholder={{ fontSize:"small" }} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <FormErrorMessage>{formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}</FormErrorMessage>
              </InputGroup>
            </Stack>

            <Button  ml={5} width='85%' size='md' mt={7} bg='#FFE031' type="submit" >
                Iniciar sesión
            </Button>
          </Flex >
        </form>

        <h2>Restablecer contraseña</h2>
        <HStack my={5}>
          <Text>Inicia sesión con</Text>
          <Button bg="#FFE031" leftIcon={<FcGoogle />} onClick={handleLoginGoogle}>Google</Button>
        </HStack>
        <div>
          <h5>¿No tienes una cuenta?</h5>
          <Stack direction="row" textAlign="center" ml={5} _hover={{ cursor: "pointer" }} >
            <Text fontSize="md" fontWeight="bold" color="blue.500" >
              <Link to="/createaccount">Regístrate aquí</Link>
            </Text>
          </Stack>
        </div>
      </Stack>
    </section>
  );
};

export default Login;