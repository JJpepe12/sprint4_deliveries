import { configureStore } from "@reduxjs/toolkit";
import { orderSlicer } from "../slicer/orderSlicer";
import { restaurantsSlicer } from "../slicer/restaurantSlicer";
import {userSlicer} from "../slicer/userSlicer";
import { dishesSlicer } from "../slicer/dishesSlicer";

const reducer = {
    user: userSlicer,
    restaurantStore: restaurantsSlicer,
    dishesStore: dishesSlicer,
    orderStore: orderSlicer
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