import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import {database} from '../../firebase/firebaseConfig';
import { dishesTypes } from "../types/dishesTypes";

const collectionName = 'products';


export const actionGetDishAsync = () => {
    return async (dispatch) => {
        const dishesCollection = collection(database, collectionName);
        const querySnapshot = await getDocs(dishesCollection);
        const dishes = [];
        try {
            querySnapshot.forEach((doc) => {
              dishes.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionGetDishSync( dishes));
        }
    }
}

const actionGetDishSync = (dish) => {
    return {
        type:dishesTypes.DISHES_GET,
        payload: {
            dish: dish
        }
    }
}
//---------------------------FILTRO------------------------------------------///
export const actionFilterDishAsync = (searchParam, searchValue) => {
    return async (dispatch) =>{
        const dishesCollection = collection(database, collectionName);
        const q = query(dishesCollection, where(searchParam, "==", searchValue));
        const dishes = [];
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) =>{
              dishes.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionFilterDishSync(dishes))
        }
    };
};

const actionFilterDishSync = (dish) => {
    return{
        type: dishesTypes.DISHES_FILTERED,
        payload: {
            dish: dish,
        },
    };
};