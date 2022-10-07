import { useState } from "react";
import styled from "styled-components";
import { CurrentBookContext } from "./context/CurrentBookContext";
import BooksPage from "./pages/BooksPage";

const StyledAPP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

function App() {
  const [book, setBook] = useState();

  const context = {
    book,
    setBook
  }
  
  return (
    <StyledAPP>
      <CurrentBookContext.Provider value={context}>
        <BooksPage />
      </CurrentBookContext.Provider>
    </StyledAPP>
  );
}

export default App;
