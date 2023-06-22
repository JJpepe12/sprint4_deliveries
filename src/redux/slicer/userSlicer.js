// import { validateYupSchema } from "formik";
import { userTypes } from "../types/userTypes";

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



