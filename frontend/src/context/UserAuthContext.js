import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState(getLocalStorage());

    function register(userInfo){
      axios.post("http://localhost:3001/create-user", {
        userInfo
      }).then((response) => {
        userInfo.user_id = response.data.insertId;
        setUser(userInfo);
        setLocalStorage(userInfo);
      });
    };

    function login(userInfo){
      axios.get("http://localhost:3001/login", {
        params: {
          email: userInfo.email,
          password: userInfo.password
        }
      }).then((response) => {
        if (response.data.length > 0) {
          setUser(response.data[0]);
          setLocalStorage(response.data[0]);
        } else {
          window.alert("Invalid login details, please try again.");
        }
      });
    }

    function getLocalStorage(){
      const localstorage = localStorage.getItem("session");
      return localstorage ? JSON.parse(localstorage) : null;
    }

    function setLocalStorage(user) {
      localStorage.setItem("session", JSON.stringify(user));
    }

    function logout(){
      localStorage.removeItem("session");
      setUser(null);
    }

    useEffect(() => {
      console.log("user set:", user);
    }, [user]);

    return (
        <userAuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}