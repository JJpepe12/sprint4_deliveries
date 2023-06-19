<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "../slicer/orderReducer";
import { restaurantReducer } from "../slicer/restaurantReducer";
import { userReducer } from "../slicer/userReducer";
import { dishesReducer } from "../slicer/dishesSlicer";
// import { applyMiddleware } from "@reduxjs/toolkit";
// import thunkMiddleware from "redux-thunk";
const reducer = {
    userStore: userReducer,
    restaurantStore: restaurantReducer,
    foodStore: dishesReducer,
    orderStore: orderReducer
=======
import { MiddlewareArray, configureStore } from "@reduxjs/toolkit";
import { orderSlicer } from "../slicer/orderSlicer";
import { restaurantSlicer } from "../slicer/restaurantSlicer";
import {userSlicer} from "../slicer/userSlicer";
import { dishesSlicer } from "../slicer/dishesSlicer";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
const reducer = {
    userStore: userSlicer,
    restaurantStore: restaurantSlicer,
    dishesStore: dishesSlicer,
    orderStore: orderSlicer
>>>>>>> 323500d2c53af440de8841fd827180969ee7d9fd
};
const store = configureStore({
    reducer, 
    devTool: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({  
            serializableCheck: false,
        }),
});
export default store;
    // middleware: applyMiddleware [thunkMiddleware]
