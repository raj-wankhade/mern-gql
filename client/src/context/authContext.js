import { onAuthStateChanged } from "firebase/auth";
import { useReducer, createContext, useEffect } from "react";
import { auth } from "../firebase";

// reducer
const firebaseReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  user: null,
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const providerId = user.providerData[0].providerId;

        const accessToken = user.accessToken;

        // dispatch accessToken
        dispatch({
          type: "LOGGED_IN_USER",
          payload: { email: user.email, token: accessToken, providerId },
        });
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const value = { state, dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
