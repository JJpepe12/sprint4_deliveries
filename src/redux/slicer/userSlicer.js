// import { validateYupSchema } from "formik";
import { userTypes } from "../types/userTypes";

// const initialValue = {
//     user: [
//         {
//             id: 1,
//             name: "pao"
//         },
//         {
//             id: 2,
//             name: "jose"
//         }

//     // error: null
// ]
// }
const usersState = {
    users: []
}


export const userSlicer = (state = usersState, action) => {
    switch (action.type) {
        case userTypes.USERS_GET:
            return{
                ...state,
                users: action.payload.user
            };
        // case restaurantsTypes.RESTAURANT_FILTERED:
        //         return{
        //             ...state,
        //             restaurants: action.payload.restaurant,
        //         };
        default:
            return state;
    };
};

//



