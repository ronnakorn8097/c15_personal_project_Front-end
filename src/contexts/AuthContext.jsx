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
  const [initalLoading, setInitialLoading] = useState(true);

  const getMe = async () => {
    try {
      const res = await axios.get("/api/auths/me");

      setAuthUser(res.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/api/auths/me")
        .then((res) => {
         
          setAuthUser(res.data.user);
        })
        .finally(() => {
          
          setInitialLoading(false);
        });
    } else {
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
      if (res.data.accessToken) {
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////// logout /////////////////////
  const logout = async (credential) => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        authUser,
        logout,
        initalLoading,
        getMe,
        setInitialLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
