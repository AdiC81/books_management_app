import styled from "styled-components";
import Books from "./components/Books";

const StyledAPP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

function App() {
  return (
    <StyledAPP>
      <Books />
    </StyledAPP>
  );
}

export default App;
