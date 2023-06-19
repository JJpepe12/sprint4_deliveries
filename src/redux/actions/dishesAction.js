import { dishesTypes} from "../types/restaurantTypes";
export const actionAddFoodAsync = (food) => {
    return async (dispatch) => {
      try {
        const foodCollection = collection(database, collectionFood);
        const docs = await addDoc(foodCollection, food);
        dispatch(actionAddFoodSync({ id: docs.id, ...food }));
      } catch (error) {
        console.log(error);
        dispatch(actionAddFoodSync({}));
      }
    };
  };
  
  const actionAddFoodSync = (food) => {
    return {
      type: foodTypes.FOOD_ADD,
      payload: food,
    };
}