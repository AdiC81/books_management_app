import { useState } from "react";
import styled from "styled-components";
import { CurrentBookContext } from "./context/CurrentBookContext";
import { CheckedBookContext } from "./context/CheckedBookContext";
import BooksPage from "./pages/BooksPage";

const StyledAPP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

function App() {
  const [book, setBook] = useState();
  const [checkedBooks, setCheckedBooks] = useState([]);

  const context = {
    book,
    setBook
  }

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
    <StyledAPP>
      <CurrentBookContext.Provider value={context}>
        <CheckedBookContext.Provider value={checkedContext}>
          <BooksPage />
        </CheckedBookContext.Provider>
      </CurrentBookContext.Provider>
    </StyledAPP>
  );
}

export default App;
