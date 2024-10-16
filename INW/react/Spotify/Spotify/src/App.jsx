import { useEffect } from "react";
import Aside from "./Components/Aside/Aside";
import CardAside from "./Components/CardAside/CardAside";
import Container from "./Components/Container/Container";
import ConteudoPrincipal from "./Components/ConteudoPrincipal/ConteudoPrincipal";
import Header from "./Components/Header/Header";
import { useState } from "react";

function App() {
  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/artistas")
      .then((res) => res.json())
      .then((data) => setArtistas(data))
      .catch((err) => console.log(err))
      .finally(() => console.log("Finalizou a requisição"));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Aside>
          <CardAside />
          <CardAside />
          <CardAside />
        </Aside>
        <ConteudoPrincipal>
          <>
            <h1>Trap</h1>
            {artistas
              .filter((artista) => artista.genero.includes("Trap"))
              .map((artista) => (
                <div className="bg-pink-700 h-28 w-28 flex flex-col justify-around items-center">
                  <h1>{artista.name}</h1>
                </div>
              ))}
            <h1>Rap</h1>
            {artistas
              .filter((artista) => artista.genero.includes("Rap"))
              .map((artista) => (
                <div className="bg-pink-700 h-28 w-28 flex flex-col justify-around items-center">
                  <h1>{artista.name}</h1>
                </div>
              ))}
            <h1>Pop</h1>
            {artistas
              .filter((artista) => artista.genero.includes("Pop"))
              .map((artista) => (
                <div className="bg-pink-700 h-28 w-28 flex flex-col justify-around items-center">
                  <h1>{artista.name}</h1>
                </div>
              ))}
            <h1>Funk</h1>
            {artistas
              .filter((artista) => artista.genero.includes("Funk"))
              .map((artista) => (
                <div className="bg-pink-700 h-28 w-28 flex flex-col justify-around items-center">
                  <h1>{artista.name}</h1>
                </div>
              ))}
          </>
        </ConteudoPrincipal>
      </Container>
    </>
  );
}

export default App;
