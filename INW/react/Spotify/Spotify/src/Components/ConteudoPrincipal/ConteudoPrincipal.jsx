import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardArtista from "../CardArtista/CardArtista";

function ConteudoPrincipal({cor}) {

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
    <main className="flex flex-col w-4/4 h-screen justify-around p-7">
            <CardArtista h1="Rap"/>
            <CardArtista h1="Trap"/>
            <CardArtista h1="Funk"/>
            <CardArtista h1="Pop"/>
    </main>
  );
}

export default ConteudoPrincipal;
