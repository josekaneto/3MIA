import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";


function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect( () =>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
        .then( response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    return (
        <>
        <h2 className="text-white text-4xl mb-5 font-font-sub" >Em destaque</h2>
        <div className="listaFilmes flex flex-row gap-3 flex-wrap">
            {
                filmes.map(
                    filme =>(
                        <div key={filme.id} className="card-filme bg-white text-black rounded-xl w-[150px]">
                            <h1 className="text-lg text-center text-titulo-kaneto" key={filmes}>{filme.title}</h1>
                            <img className="" src={`https://image.tmdb.org/t/p/w154/${filme.poster_path}`} alt="" />
                            <Link onClick={()=>document.getElementById('my_modal_3').showModal()} className="bg-primary-kaneto text-secondary-kaneto text-xl"><FaArrowAltCircleDown/></Link>
                        </div>
                    )
                )
            }
        </div>
        </>
    );
    
}

export default Filmes;