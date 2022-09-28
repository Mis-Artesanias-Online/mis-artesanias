import {useState, createContext, useContext, useEffect} from "react";
import {getItem} from "../src/lib/sessionStorage.js";

const userContext = createContext();

export const useUser = () => useContext(userContext);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name: getItem(""),
        token: getItem("")
    });

    const getUser = () => {
        const user = getItem("name")
        const token = getItem("x-jwt")
        if (user) {
            setUser(user.name);
            setUser(user.token);
        }
        return (user);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <userContext.Provider value={{user}}>
            {children}
        </userContext.Provider>
    );
};