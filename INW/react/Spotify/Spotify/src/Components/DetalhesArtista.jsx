import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function DetalhesArtista(){

    const { id } = useParams()

    const [artista, setArtistas] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/artistas/${id}`)
          .then((res) => res.json())
          .then((data) => setArtistas(data))
          .catch((err) => console.log(err))
          .finally(() => console.log("Finalizou a requisição"));
      }, []);

    
    return(
        <>
        <div className="w-3/4 p-10 gap-y-10 flex flex-col">
            <h1 className="text-3xl font-bold">{artista.name}</h1>
            <img className="w-80 h-auto" src={artista.imagem} alt=""/>
            <p className="text-lg">{artista.bio}</p>
        </div>
        </>
    )
}