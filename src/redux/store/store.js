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
