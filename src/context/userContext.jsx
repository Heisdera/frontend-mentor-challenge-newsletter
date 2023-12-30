import { createContext, useReducer, useContext } from "react";

const UserContext = createContext();

const initialState = {
  userEmail: "",
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "signUp":
      return {
        ...state,
        userEmail: action.payload,
        isAuthenticated: true,
      };

    case "signOut":
      return {
        ...state,
        userEmail: "",
        isAuthenticated: false,
      };

    default:
      throw new Error("unknown action");
  }
}

function UserProvider({ children }) {
  const [{ userEmail, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <UserContext.Provider value={{ userEmail, isAuthenticated, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

function useEmailAuth() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("UserContext was used outside the UserProvider");
  }

  return context;
}

export { UserProvider, useEmailAuth };
