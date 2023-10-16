import { createContext } from "react";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../../utils/local-storage.js";
import { useState } from "react";
import axios from "../config/axios.js";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initalLoading , setInitialLoading] = useState(true);



  useEffect(() => {
        const token = getAccessToken();
        if (token) {
            axios.get("/api/auths/me", token).then((res)=>{
              setAuthUser(res.data.user)
          }).finally(()=>setInitialLoading(false))
        }else{
            setInitialLoading(false)
        }
      
  
  }, []);


//////////////////////  login /////////////////////
  const login = async (credential) => {
    //loginInput

    try {
      const res = await axios.post("/api/auths/login", credential);
      // res = {accessToken , user}
      // console.log(res)
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////// logout /////////////////////
const logout = async (credential) => {
    removeAccessToken();
    setAuthUser(null);
}

  return (
    <AuthContext.Provider value={{ login, authUser,logout ,initalLoading}}>
      {children}
    </AuthContext.Provider>
  );
}


