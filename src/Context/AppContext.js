import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [inputVal, setInputVal] = useState("");

    const handleInputValueChange = (value) => {
        setInputVal(value);
    
    };

    return (
        <AppContext.Provider value={{ inputVal, handleInputValueChange }}>
            {children}
        </AppContext.Provider>
    );
};
