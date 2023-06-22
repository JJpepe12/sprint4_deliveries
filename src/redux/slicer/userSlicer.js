import { validateYupSchema } from "formik";
import { userTypes } from "../types/userTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    user: [
        {
            id: 1,
            name: "pao"
        },
        {
            id: 2,
            name: "jose"
        }

    // error: null
]
}

export const userSlicer = (state=initialValue, action) => {
    switch (action.type) {
        case userTypes.USERS_GET:

            return {
                ...state
            };
        // case userTypes.USERS_CREATE:

        //     return{
        //         ...state,
        //         create: action.payload
        //     }; 
        // case userTypes.USERS_UPDATE:

        //     return;
        default: 
            return state;
    }
}

//
const initialState = {
    user: null,
    loading: false,
    error: null
}

const userLogInSlicer = createSlice({
    name: "auth",
    initialState, 
    reducers: {
        singInsucces: (state, action) => {
            state.user = action.payload;
            state.isLoading = false; 
            state.error = null;
        },
        singOutsucces: (state) => {
            state.user = null;
            state.isLoading = false; 
            state.error = null;
        },
        setLoading: (state, action ) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) =>{
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});
export const {singInsucces,  singOutsucces, setLoading, setError} = userSlicer.action;
export default  userLogInSlicer.reducers;
