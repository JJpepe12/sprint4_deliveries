 import { restaurantsTypes } from "../types/restaurantTypes";

 const restaurantsState = {
     restaurants: []
 }


export const restaurantsSlicer = (state = restaurantsState, action) => {
    switch (action.type) {
        case restaurantsTypes.RESTAURANT_GET:
            return{
                ...state,
                restaurants: action.payload.restaurant
            };
        case restaurantsTypes.RESTAURANT_FILTERED:
                return{
                    ...state,
                    restaurants: action.payload.restaurant,
                };
        default:
            return state;
    };
};


  