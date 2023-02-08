import { createContext, useState } from "react";
import App from "../App";
import UnauthApp from "../unauth-app";


export const AuthContext = createContext();

const AuthProvider = ()=> {
  const [token, setToken] = useState();

  return(
    <AuthContext.Provider value={{token, setToken}}>
      {token ? <App/> : <UnauthApp  />}
    </AuthContext.Provider>
  )
}


export default AuthProvider;