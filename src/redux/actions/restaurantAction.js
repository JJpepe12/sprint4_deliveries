import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import {database} from '../../firebase/firebaseConfig';
import { restaurantsTypes } from "../types/restaurantTypes";

const collectionName = 'restaurants';


export const actionGetRestaurantAsync = () => {
    return async (dispatch) => {
        const restaurantsCollection = collection(database, collectionName);
        const querySnapshot = await getDocs(restaurantsCollection);
        const restaurants = [];
        try {
            querySnapshot.forEach((doc) => {
                restaurants.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionGetRestaurantSync(restaurants));
        }
    }
}

const actionGetRestaurantSync = (restaurant) => {
    return {
        type: restaurantsTypes.RESTAURANT_GET,
        payload: {
            restaurant: restaurant
        }
    }
}
//---------------------------FILTRO------------------------------------------///
export const actionFilterRestaurantAsync = (searchParam, searchValue) => {
    return async (dispatch) =>{
        const restaurantsCollection = collection(database, collectionName);
        const q = query(restaurantsCollection, where(searchParam, "==", searchValue));
        const restaurants = [];
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) =>{
                restaurants.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionFilterRestaurantSync(restaurants))
        }
    };
};

const actionFilterRestaurantSync = (restaurant) => {
    return{
        type: restaurantsTypes.RESTAURANT_FILTERED,
        payload: {
            restaurant: restaurant,
        },
    };
};