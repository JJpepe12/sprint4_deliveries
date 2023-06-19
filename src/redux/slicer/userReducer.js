// import { usserTypes } from "../types/userTypes";

// const initialValue = {
//     user: {},
//     error: null
// }


// const usserReducer = (state = initialValue, action) => {
//     switch (action.type) {
//         case usserTypes.CREATE_USER:
            
//             return {
//                 ...state,
//                 user: {
//                     ...action.payload.user
//                 },
//                 error: action.payload.error
//             }
//         case userTypes.LOGOUT_USER:
//             return {
//                 ...state,
//                 user: null,
//                 error: action.payload
//             }
//         case usserTypes.LOGGIN_USER:
//             return {
//                 ...state,
//                 user: {
//                     ...action.payload
//                 }
//             }
//         default:
//             return {
//                 ...state
//             }
//     }
// }

// export default usserReducer;