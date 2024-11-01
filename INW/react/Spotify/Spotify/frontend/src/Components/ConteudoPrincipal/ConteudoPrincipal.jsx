import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardArtista from "../CardArtista/CardArtista";
import { FaSearch } from "react-icons/fa";

function ConteudoPrincipal() {

  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    fetch("https://spotify-back-six.vercel.app/artistas")
      .then((res) => res.json())
      .then((data) => setArtistas(data))
      .catch((err) => console.log(err))
      .finally(() => console.log("Finalizou a requisição"));
  }, []);

  return (

    <main className="flex flex-col w-3/4 h-full justify-between pl-10">

      <CardArtista h1="Rap" />
      <CardArtista h1="Trap" />
      <CardArtista h1="Funk" />
      <CardArtista h1="Pop" />
    </main>
  );
}

export default ConteudoPrincipal;

