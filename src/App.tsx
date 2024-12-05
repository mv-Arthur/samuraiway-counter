import styled from "styled-components";
import { Main } from "./components/main/Main";

function App() {
     return (
          <S.Container>
               <Main />
          </S.Container>
     );
}

const S = {
     Container: styled.div`
          margin: 0 auto;
          width: 1440px;
          margin-top: 20px;
     `,
};

export default App;
