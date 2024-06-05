import { useState } from "react";

function Filmes() {

    const [filmes, setFilmes] = useState([])

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
    .then( response => response.json())
    .then(response => setFilmes(response.results))
    .catch(error => console.log(error))

    return (
        <>
        <h1>Filmes</h1>
        <div className="listaFilmes grid grid-cols-3">
            {
                filmes.map(
                    filme =>(
                        <div key={filme.id} className="card-filme card bg-black text-white m-4 flex flex-col justify-around rounded-2xl">
                            <h1 className="text-3xl text-center text-titulo-kaneto" key={filmes}>{filme.title}</h1>
                            <img className="" src={`https://image.tmdb.org/t/p/w342/${filme.poster_path}`} alt="" />
                            <p className="m-4 text-justify" >{filme.overview}</p>
                        </div>
                    )
                )
            }
        </div>
        </>
    );
}

export default Filmes;