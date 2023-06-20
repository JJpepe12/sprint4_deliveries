import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Register from "../pages/Register";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
// import Layout from "../components/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase/firebaseConfig";
// import { useDispatch, useSelector } from "react-redux";
// // import { actionLoginSync } from "../redux/actions/userActions";

const AppRouter = () => {
//   // const [isLoggedIn, setIsLoggedIn] = useState(null);


//   // const { user } = useSelector((store) => store.user);
//   // console.log(user);

//   // useEffect(() => {
//   //   onAuthStateChanged(auth, (userLogged) => {
//   //     if (userLogged?.uid) {
//   //       setIsLoggedIn(true);

//   //       if (!Object.entries(user).length) {
//   //         console.log("No hay info");
//   //         const logged = {
//   //           email: userLogged.auth.currentUser.email,
//   //           name: userLogged.auth.currentUser.displayName,
//   //           avatar: userLogged.auth.currentUser.photoURL,
//   //           accessToken: userLogged.auth.currentUser.accessToken,
//   //         };
//   //         // dispatch(actionLoginSync(logged));
//   //       }
//   //       console.log(userLogged);
//   //     } else {
//   //       setIsLoggedIn(false);
//   //     }

//   //     // setLoading(false);
//   //   });
//   // }, [user, dispatch]);

//   // if (loading) {
//   //   return <Spinner animation="grow" />;
//   // }

return (
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<PublicRouter />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path="home" element={<Home />} />
            {/* <Route path="details" element={<Home />} />
            <Route path="order" element={<Home />} />
            <Route path="search" element={<Home />} />
            <Route path="profile" element={<Home />} />
            <Route path="purchases" element={<Purchases />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
};

export default AppRouter;
