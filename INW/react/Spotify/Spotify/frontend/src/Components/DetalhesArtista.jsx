import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom"

export default function DetalhesArtista() {

    const { id } = useParams()

    const [artista, setArtistas] = useState({})

    useEffect(() => {
        fetch(`https://spotify-back-six.vercel.app/artistas/${id}`)
            .then((res) => res.json())
            .then((data) => setArtistas(data))
            .catch((err) => console.log(err))
            .finally(() => console.log("Finalizou a requisição"));
    }, []);




    return (
        
            <div className="w-3/4 px-10 pt-0 gap-y-10 flex flex-col items-center"> 
                    <Link className="flex items-center w-full justify-between" to="/">
                        <FaArrowLeft className="text-white text-2xl" />
                    </Link>  
                <h1 className="text-3xl font-bold text-white">{artista.name}</h1>
                <img className="w-80 h-auto" src={artista.imagem} alt="" />
                <p className="text-lg text-white text-justify">{artista.bio}</p>
            </div>
        
    )
}