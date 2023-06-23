// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
//   updateProfile, signInWithPopup} from "firebase/auth";
// import { auth } from "../../firebase/firebaseConfig";
// import { userTypes } from "../types/userTypes";


// export const actionRegisterAsync = ({ email, password, name, avatar }) => {
//   return (dispatch) => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(async ({ user }) => {
//         console.log(user);
//         const { accessToken, photoURL, phoneNumber } = user.auth.currentUser;
//         await updateProfile(auth.currentUser, {
//           displayName: name,
//           photoURL: avatar,
//         });
//         dispatch(
//           actionRegisterSync({
//             email,
//             name,
//             accessToken,
//             photoURL,
//             phoneNumber,
//             error: false,
//           })
//         );
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);
//         dispatch(actionRegisterAsync({ error: true, errorMessage }));
//       });
//   };
// };

// const actionRegisterSync = (user) => {
//   return {
//     type: userTypes.CREATE_USER,
//     payload: {
//       ...user,
//     },
//   };
// };



// export const loginProviderAsync = (provider) => {
//   return (dispatch) => {
//       signInWithPopup(auth, provider)
//       .then((result) =>{
//           const user = result.user;
//           console.log(user)
//           const {displayName, accessToken, photoURL, phoneNumber} = user.auth.currentUser;
//           //console.log(result.user);
//           dispatch(actionLoginSync({
//               email: user.email,
//               name: displayName,
//               accessToken,
//               avatar: photoURL,
//               phoneNumber,
//               error: false
//           }))
//       })
//       .catch((error) =>{
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           const email = error.customData.email;
//           console.log(error);
//           console.log(errorCode);
//           console.log(errorMessage);
//           dispatch(actionLoginSync({ email, error: true, errorMessage }))
//       })
//   }
// }

// export const actionLogoutAsync = () => {
//   return (dispatch) => {
//     signOut(auth)
//       .then(() => {
//         dispatch(actionLogoutSync());
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

// const actionLogoutSync = () => {
//   return {
//     type: userTypes.USER_LOGOUT,
//   };
// };

// import { userTypes } from "../types/userTypes"
// import { createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
//     updateProfile, signInWithPopup
//   } from "firebase/auth";
//   import { auth } from "../../firebase/firebaseConfig";

//   export const updateUssersAction = (id) => {
//     return {
//         type: userTypes.USERS_UPDATE,
//         payload: id
//     } 
// }
// export const createUssersAction = (id) => {
//   return {
//       type: userTypes.USERS_CREATE,
//       payload: id
//   }
// }

// export const getUssersAction = (id) => {
//   return {
//       type: userTypes.USERS_GET,
//       payload: id
//   }
// }
// export const listUssersAction = () => {
//   return {
//       type: userTypes.USERS_GET,
//   }
// }
import {
  createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { userTypes } from "../types/userTypes";

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
