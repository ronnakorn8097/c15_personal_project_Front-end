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

  useEffect(() => {
    const fetch = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const fetchUser = await axios.get("/api/auths/me", token);
          setAuthUser(fetchUser.data.user);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);



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

  return (
    <AuthContext.Provider value={{ login, authUser }}>
      {children}
    </AuthContext.Provider>
  );
}
