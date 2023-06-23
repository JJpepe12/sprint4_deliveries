import { dishesTypes } from "../types/dishesTypes";

const dishesState = {
    dishes: []
}


export const dishesSlicer = (state = dishesState, action) => {
   switch (action.type) {
       case dishesTypes.DISHES_GET:
           return{
               ...state,
               dishes: action.payload.dish
           };
       case dishesTypes.DISHES_FILTERED:
               return{
                   ...state,
                   dishes: action.payload.dish,
               };
       default:
           return state;
   };
};