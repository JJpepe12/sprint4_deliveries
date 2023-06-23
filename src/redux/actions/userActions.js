import {
  createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword
} from "firebase/auth";
import { auth, database } from "../../firebase/firebaseConfig";
import { userTypes } from "../types/userTypes";
import { collection, getDocs } from "@firebase/firestore";

const collectionName = 'users';


export const actionGetUsertAsync = () => {
    return async (dispatch) => {
        const usersCollection = collection(database, collectionName);
        const querySnapshot = await getDocs(usersCollection);
        const users = [];
        try {
            querySnapshot.forEach((doc) => {
              users.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionGetUserSync(users));
        }
    }
}

const actionGetUserSync = (user) => {
    return {
        type: userTypes.USERS_GET,
        payload: {
            user: user
        }
    }
}

export const registerActionAsync = ({ email, password, name, avatar }) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile (auth.currentUser,{
        displayName: name,
        photoURL :avatar,
      });
      const { accessToken } = user.auth.currentUser;
        console.log(user);
      
      dispatch(registerActionSync({ email, name, avatar, accessToken }, null));
    } catch (error) {
      console.log(error);
      dispatch(
        registerActionSync({}, { code: error.code, message: error.message })
      );
    }
  };
};


const registerActionSync = (newUser, error) => {
  return {
    type: userTypes.USERS_CREATE,
    payload: {
      user: newUser,
      error: error,
    },
  };
};

export const logoutActionAsync = () => {
  return async (dispatch) => {
    let errors = null;
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
      errors = {
        error: true,
        code: error.code,
        message: error.message,
      };
    } finally {
      dispatch(logoutActionSync(errors));
    }
  };
};

const logoutActionSync = (error) => {
  return {
    type: userTypes.LOGOUT_USER,
    payload: error,
  };
};

export const loginActionAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const { displayName, accessToken, photoURL } = user.auth.currentUser;

      const userLogged = {
        email,
        name: displayName,
        avatar: photoURL,
        accessToken,
      };

      dispatch(loginActionSync(userLogged));
    } catch (error) {
      console.log(error);
    }
  };
};
export const loginActionSync = (user) => {
  return {
    type: userTypes.USERS_GET,
    payload: user,
  };
};

