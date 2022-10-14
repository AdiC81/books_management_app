import React, { useState } from "react";
import { useContext } from "react";

const CheckedBookContext = React.createContext();

export function CheckedBookProvider({ children }) {
    const [checkedBooks, setCheckedBooks] = useState([]);

    const checkedContext = {
        checkedBooks,
        addToBookList: (checked, book) => {
          const newCheckedBooks = [...checkedBooks];
          if (checked) {
            if (newCheckedBooks.includes(book)) return;
            newCheckedBooks.push(book);
            setCheckedBooks(newCheckedBooks);
          }
          else if (!checked) {
            newCheckedBooks.splice(newCheckedBooks.indexOf(book), 1);
            setCheckedBooks(newCheckedBooks);
          }
        }
      }

    return (
        <CheckedBookContext.Provider value={checkedContext}>
            {children}
        </CheckedBookContext.Provider>
    )
}

export function useCheckedBook() {
    const context = useContext(CheckedBookContext);

    if (!context) {
        throw new Error('useCheckedBook must be used within CheckedBookProvider');
    }

    return context;
}