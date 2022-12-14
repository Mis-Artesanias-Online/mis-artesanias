import { useState, createContext, useContext, useEffect } from "react";
import { getItem } from "../src/lib/sessionStorage.js";

const userContext = createContext();

export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: getItem(""),
    token: getItem(""),
    id: "",
    role: "",
  });

  console.log(user);

  const getUser = () => {
    const user = getItem("name");
    const token = getItem("x-jwt");
    if (user) {
      setUser({ user: user, token: token });
    }
    return user;
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
