import React from "react";
import logo from "../assets/logo.svg";
import Form from "../components/formLogIn/Form";
import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { loginGoogle } from "../redux/actions/authActions";

const Login = () => {
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
        {/* <Form handleUser={handleUser} /> */}

        <Form />
        
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
            <Text fontSize="md" fontWeight="bold" color="blue.500">
              <Link to="/register">Regístrate aquí</Link>
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
