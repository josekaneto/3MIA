import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect( () =>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
        .then( response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    return (
        <>
        <div className="listaFilmes flex flex-row gap-3 flex-wrap">
            {
                filmes.map(
                    filme =>(
                        <div key={filme.id} className="card-filme bg-black text-white rounded-2xl">
                            <h1 className="text-3xl text-center text-titulo-kaneto" key={filmes}>{filme.title}</h1>
                            <img className="" src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} alt="" />
                            <Link to={`${filme.id}`} className="bg-primary-kaneto text-secondary-kaneto rounded">Saiba Mais</Link>
                        </div>
                    )
                )
            }
        </div>
        </>
    );
}

export default Filmes;