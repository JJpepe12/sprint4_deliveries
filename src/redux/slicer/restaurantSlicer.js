// import { restaurantTypes, foodTypes } from "../types/restaurantTypes";

// const restaurantState = {
//     restaurant: []
// }

// export const restaurantSlicer = (state = restaurantState, action) => {
//     switch (action.type) {
//         case restaurantTypes.RESTAURANT_GET:
//             return{
//                 ...state,
//                 restaurant: action.payload.restaurant
//             };
//         case restaurantTypes.RESTAURANT_FILTERED:
//             return {
//                 ...state,
//                 restaurant: action.payload.restaurant
//             };
//         case restaurantTypes.RESTAURANT_ADD:
//             return {
//                 ...state,
//                 restaurant: [...state.restaurant, action.payload],
//             };
//         case restaurantTypes.RESTAURANT_DELETE:
//             return{
//                 ...state,
//                 restaurant: state.restaurant.filter((rest) => 
//                     rest.id !== action.payload.id
//                 ) 
//             }
//         default:
//             return state;
//     };
// };

// const foodState = {
//     food: []
// }


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
// export const actionRestaurantsFilter=(RestaurantsFilter)=>{
//     return{
//       type:restaurantsTypes.RESTAURANT_FILTERED,
//       payload:RestaurantsFilter
//     }
//   }

  