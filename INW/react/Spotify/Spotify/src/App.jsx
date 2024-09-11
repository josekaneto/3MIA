import Aside from "./Components/Aside/Aside"
import CardAside from "./Components/CardAside/CardAside"
import Container from "./Components/Container/Container"
import ConteudoPrincipal from "./Components/ConteudoPrincipal/ConteudoPrincipal"
import Header from "./Components/Header/Header"

function App() {

  return (
    <>
      <Header/>
      <Container>
        <Aside>
          <CardAside/>
          <CardAside/>
          <CardAside/>
        </Aside>
        <ConteudoPrincipal/>
      </Container>
    </>
  )
}

export default App

