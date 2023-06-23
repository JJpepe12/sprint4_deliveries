import { configureStore } from "@reduxjs/toolkit";
import { orderSlicer } from "../slicer/orderSlicer";
import { restaurantsSlicer } from "../slicer/restaurantSlicer";
import {userSlicer} from "../slicer/userSlicer";
import { dishesSlicer } from "../slicer/dishesSlicer";
// import { applyMiddleware } from "@reduxjs/toolkit";
// import thunkMiddleware from "redux-thunk";

const reducer = {
    userStore: userSlicer,
    restaurantStore: restaurantsSlicer,
    dishesStore: dishesSlicer,
    orderStore: orderSlicer
};
const store = configureStore({
    reducer, 
    devTool: process.env.NODE_ENV !== "production",
    // middleware: applyMiddleware [thunkMiddleware]
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({  
            serializableCheck: false,
        }),
});
export default store;