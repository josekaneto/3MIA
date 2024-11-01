import { useEffect } from "react";
import Aside from "./Components/Aside/Aside";
import CardAside from "./Components/CardAside/CardAside";
import Container from "./Components/Container/Container";
import ConteudoPrincipal from "./Components/ConteudoPrincipal/ConteudoPrincipal";
import Header from "./Components/Header/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Container>
        <Aside/>
          <Outlet/>
      </Container>
    </>
  );
}

export default App;
