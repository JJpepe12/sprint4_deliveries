import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
// import Layout from "../components/Layout";
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
import { loginActionSync } from "../redux/actions/userActions";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid) {
        setIsLoggedIn(true);

        if (!Object.entries(user).length) {
          console.log("No hay info");
          const logged = {
            email: userLogged.auth.currentUser.email,
            name: userLogged.auth.currentUser.displayName,
            avatar: userLogged.auth.currentUser.photoURL,
            accessToken: userLogged.auth.currentUser.accessToken,
          };
          dispatch(loginActionSync(logged));
        }
        console.log(userLogged);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [user, dispatch]);


return (
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
            <Route index element={<Login />} />
            <Route path="createaccount" element={<CreateAccount />}/> 

          </Route>
          <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
            <Route path="home" element={<Home />} />
            <Route path="/detailsRestaurant/:name" element={<RestaurantsDetails />} />
            <Route path="/foodplate/:name" element={<FoodPlate />}/>
            <Route path="search" element={<Search />}/> 
            {/*<Route path="order" element={<Home />} />
            <Route path="profile" element={<Home />} />
            <Route path="purchases" element={<Purchases />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </ChakraProvider>
);
};

export default AppRouter;
