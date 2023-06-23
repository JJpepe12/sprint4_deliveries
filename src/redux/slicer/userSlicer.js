import { userTypes } from "../types/userTypes";

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
        default:
            return state;
    };
};



