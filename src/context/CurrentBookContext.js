import React, { useContext, useState } from "react";

const CurrentBookContext = React.createContext();

export const CurrentBookProvider = ({ children }) => {
    const [book, setBook] = useState();

    const context = {
        book,
        setBook
    }

    return (
        <CurrentBookContext.Provider value={context}>
            {children}
        </CurrentBookContext.Provider>
    )
}

export const useCurrentBook = () => {
    const context = useContext(CurrentBookContext);

    if (!context) {
        throw new Error('useCurrentBook must be used within CurrentBookProvider');
    }

    return context;
}