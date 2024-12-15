import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

type contextType = {
    isLoggedIn: boolean;
    setIsLoggedIn:(status: boolean) => void;
}

const SessionContext = createContext<contextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},    
});


export const useSession = () => useContext(SessionContext);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await axios.post("/api/validate-session", {
                    withCredentials: true,
                });

                if (response.status === 200) {
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.error("Session validation failed:", error);
                setIsLoggedIn(false);
            }
        };
        checkSession();
    }, []);

    return (
        <SessionContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </SessionContext.Provider>
    );
};