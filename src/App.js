import styled from "styled-components";
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
      <BooksPage />
    </StyledAPP>
  );
}

export default App;
