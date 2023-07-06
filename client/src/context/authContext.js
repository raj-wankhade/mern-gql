import { useReducer, createContext } from "react";

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
  const value = { state, dispatch };

  return <AuthProvider value={value}>{children}</AuthProvider>;
};

export { AuthContext, AuthProvider };
