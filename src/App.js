import styled from "styled-components";
import { CurrentBookProvider } from "./context/CurrentBookContext";
import { CheckedBookProvider } from "./context/CheckedBookContext";
import BooksPage from "./pages/BooksPage";

const StyledAPP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

function App() {
  return (
    <StyledAPP>
      <CurrentBookProvider>
        <CheckedBookProvider>
          <BooksPage />
        </CheckedBookProvider>
      </CurrentBookProvider>
    </StyledAPP>
  );
}

export default App;
