import { useState } from "react";
import { GlobalStyle, ContainerStyle } from "@styles";
import { Navigator, Header, Main, Footer } from '@components';
import { ViewPort } from './context';
import { viewPortIcons } from "./RWD";

function App() {
  //從Navigator監聽Mobile跟Desktop
  const [WhichViewPort, setWhichViewPort] = useState('');

  return (
    <>
     
      <ViewPort.Provider value={{ setWhichViewPort,  WhichViewPort, viewPortIcons }} >
        <GlobalStyle />
        <ContainerStyle>
          <Navigator >

          </Navigator>
          <Header>

          </Header>
          <Main >

          </Main>
          <Footer>

          </Footer>
        </ContainerStyle>
      </ViewPort.Provider>

    </>
  );
}

export default App
