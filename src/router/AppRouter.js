import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { actionLoginSync } from "../redux/actions/usserActions";
// import Spinner from "react-bootstrap/Spinner";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  // const [loading, setLoading] = useState(true);

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
          dispatch(actionLoginSync(logged));
        }
        console.log(userLogged);
      } else {
        setIsLoggedIn(false);
      }

      // setLoading(false);
    });
  }, [user, dispatch]);

  // if (loading) {
  //   return <Spinner animation="grow" />;
  // }

  return (
    <BrowserRouter>
      <Routes>
      <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        <Route path="/" element={<Layout />}>
          <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
            <Route path="home" element={<Home />} />
            <Route path="details" element={<Home />} />
            <Route path="order" element={<Home />} />
            <Route path="search" element={<Home />} />
            <Route path="profile" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
/* <BrowserRouter>
      <Routes>
          <Route index element={<Login />} /> 
        <Route path="/" element={<Layout />}>
          <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
          
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
            <Route path="home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter> */
