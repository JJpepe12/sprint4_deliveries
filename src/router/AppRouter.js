import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import RestaurantsDetails from "../pages/RestaurantsDetails";
import FoodPlate from "../pages/FoodPlate";
import Search from "../pages/Search";

import GlobalStyles from "../components/styles/GlobalStyle";
import CreateAccount from "../pages/CreateAccount";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { actionLoginSync } from "../redux/actions/userActions";
import { useState } from "react";
import { useEffect } from "react";
import OrderAccepted from "../pages/OrderAccepted";

const AppRouter = () => {
    
  // const [isLoggedIn, setIsLoggedIn] = useState(null);
  // const [loading, setLoading] = useState(true);

  //   const dispatch = useDispatch();

  //   const { user } = useSelector((store) => store.user);
  //   console.log(user);

  //   useEffect(() => {
  //     onAuthStateChanged(auth, (userLogged) => {
  //       if (userLogged?.uid) {
  //         setIsLoggedIn(true);

  //         if (!Object.entries(user).length) {
  //           console.log("No hay info");
  //           const logged = {
  //             email: userLogged.auth.currentUser.email,
  //             name: userLogged.auth.currentUser.displayName,
  //             avatar: userLogged.auth.currentUser.photoURL,
  //             accessToken: userLogged.auth.currentUser.accessToken,
  //           };
  //           dispatch(actionLoginSync(logged));
  //         }
  //         console.log(userLogged);
  //       } else {
  //         setIsLoggedIn(false);
  //       }

  //       setLoading(false);
  //     });
  //   }, [user, dispatch]);

  //   if (loading) {
  //     return <Spinner animation="grow" />;
  //   }

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/"> */}
            <Route element={<PublicRouter />}>
              <Route path="/" element={<Login />} />
              <Route path="createaccount" element={<CreateAccount />} />
             
              {/* <Route path={"details"} element={<RestaurantsDetails/>}/> */}
              <Route path="/detailsRestaurant/:name" element={<RestaurantsDetails />} />
              {/* <Route path={"foodplate"} element={<FoodPlate />}/>  */}
              <Route path="/foodplate/:name" element={<FoodPlate />} />
              <Route path={"search"} element={<Search />} />
              <Route path="order" element={<OrderAccepted />} />
            </Route>
            <Route element={<PrivateRouter />}>
            
            
            <Route path="home" element={<Home />} />
              {/* <Route path="details" element={<Home />} />
            <Route path="order" element={<Home />} />
            <Route path="search" element={<Home />} />
            <Route path="profile" element={<Home />} />
            <Route path="purchases" element={<Purchases />} /> */}
              <Route path="*" element={<NotFound />} />
            </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </ChakraProvider>


  );
};

export default AppRouter;

//crear la funcion de la autenticación
//pasarle al elemento publico y privado el isAutenticate
//isAuthentication={isLoggedIn}
//<Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>