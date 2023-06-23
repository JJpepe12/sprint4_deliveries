import React from "react";
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

const Login = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  const dispatch = useDispatch();

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


        <form  position="absolute">
            <Flex  overflow="wrap" flexWrap="wrap" alignContent="start" flexDirection="column" spacing={10}>
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
            </Flex >
            </form>
        

        <h2>Restablecer contraseña</h2>
        <HStack my={5}>
          <Text>Inicia sesión con</Text>
          <Button
            bg="#FFE031"
            leftIcon={<FcGoogle />}
            onClick={handleLoginGoogle}
          >
            Google
          </Button>
        </HStack>
        <div>
          <h5>¿No tienes una cuenta?</h5>
          <Stack
            direction="row"
            textAlign="center"
            ml={5}
            _hover={{ cursor: "pointer" }}
          >
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


// import React from 'react';
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch } from 'react-redux';
// import { loginActionAsync } from '../redux/actions/userActions';
// import { Link } from 'react-router-dom';

// const schema = yup.object({

//   email: yup
//     .string()
//     .email("Debe ingresar un email")
//     .required("Este campo es obligatorio"),
//   password: yup
//     .string()
//     .required("Este campo es obligatorio")

// });

// const Login = () => {

//   const dispatch = useDispatch()
//     const {
//       register,
//       handleSubmit,
//       formState: { errors },
//     } = useForm({
//       resolver: yupResolver(schema),
//     });

//   const logIn = (dataForm) => {
//     console.log(dataForm);
//     dispatch(loginActionAsync(dataForm.email, dataForm.password));
//   }

//   return (
//     <Form className="p-5" onSubmit={handleSubmit(logIn)}>
//       <Form.Group className="mb-3">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Ingrese su email"
//           {...register("email")}
//         />
//         <Form.Text className="text-muted">{errors.email?.message}</Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Ingrese una contraseña"
//           {...register("password")}
//         />
//         <Form.Text className="text-muted">{errors.password?.message}</Form.Text>
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Iniciar Sesión
//       </Button>

//       <p>¿No tines una cuenta? <Link to="/register">Haz click aquí!</Link></p>
//     </Form>
//   );
// }

// export default Login
