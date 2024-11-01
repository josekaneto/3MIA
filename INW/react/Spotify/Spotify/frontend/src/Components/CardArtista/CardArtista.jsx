import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function CardArtista({h1}){

    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        fetch("https://spotify-back-six.vercel.app/artistas")
          .then((res) => res.json())
          .then((data) => setArtistas(data))
          .catch((err) => console.log(err))
          .finally(() => console.log("Finalizou a requisição"));
      }, []);

    return(
    <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-white">{h1}</h1>
        <div className="flex w-full pl-5 pt-5 pb-3">
          {artistas
            .filter((artista) => artista.genero.includes(`${h1}`))
            .map((artista) => (
              <Link to={`/artistas/${artista._id}`}>
              <div className="h-36 w-36 flex flex-col relative rounded-lg mr-14 overflow-hidden "
              style={
                {backgroundColor: `white`}
              }>
                <h1 className="ml-3 mt-2 text-xl font-semibold ">{artista.name}</h1>
                <img className="w-2/3 h-2/3 absolute bottom-0 -right-2 rounded-lg rotate-[20deg] translate-x-[18%] translate-y-[-2%]" src={artista.capa} alt="" />
              </div>
              </Link>
            ))}
        </div>
      </div>
    )
}