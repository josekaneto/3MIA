import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "antd";

function Favoritos() {


    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
            .then(response => response.json())
            .then(response => {
                setFilmes(response.results)
                setartigos(response.results)
            })
            .catch(error => console.log(error))
    }, [])

    const [aModal, setaModal] = useState({});
    const [mostrarModal, setMostrarModal] = useState(false);

    const moreDetail = items => {
        setMostrarModal(true);
        setaModal(items);
    };

    const closeDetail = () => {
        setMostrarModal(false);
    };

    const [searchInput, setsearchInput] = useState('')
    const [artigos, setartigos] = useState(filmes)

    const handleInputChange = e => {

        const searchTerm = e.target.value
        setsearchInput(searchTerm)

        const resultados = filmes.filter((search) => (
            search.title.toLowerCase().includes(searchTerm.toLowerCase())
        ))
        console.log(resultados)
        setartigos(resultados)
    }


    return (
        <>

            <form className="flex justify-center relative pt-7">
                <label htmlFor="search"><img className="w-7 absolute top-1/2 ml-2" src="image.png" alt="" /></label>
                <input
                    type="search"
                    name="search"
                    id="search"
                    value={searchInput}
                    onChange={handleInputChange}
                    className="ps-11 pe-3 py-1 w-2/5 rounded-full bg-secondary-kaneto focus:outline-none focus:border-2 focus:border-primary-kaneto hover:border-2 hover:border-titulo-kaneto text-titulo-kaneto"
                />
            </form>
            <h2 className="font-font-sub font-black text-5xl text-white flex justify-center my-10">Lista de Favoritos</h2>
            <div className="listaFilmes gap-10 flex flex-wrap justify-center">
                { artigos.length > 0 ?
                    artigos.map(
                        filme => (
                            <>

                                <div key={filme.id} className="flex flex-col bg-primary-kaneto text-black rounded-b-2xl w-[200px] relative h-4/6">
                                    <Link onClick={() => moreDetail(filme)} className="">
                                        <img className="h-full" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" />
                                        <h1 className=" text-xl text-center p-1 items-center text-titulo-kaneto" key={filmes}>{filme.title}</h1>
                                    </Link>
                                    <Link to="/favoritos" className=" right-0 absolute"><img className="w-8 p-1" src="star.png" alt="" /></Link>
                                </div>

                            </>


                        )
                    )
                    :
                    <p className="text-white">Filme não encontrado 😓</p>
                    
                    
                }
            </div>

            <Modal
                title={aModal.title}
                open={mostrarModal}
                footer={
                    <Button onClick={closeDetail} className="bg-primary-kaneto text-white hover:bg-none hover:border-primary-kaneto">
                        Ok
                    </Button>
                }
                onCancel={closeDetail}
            >
                <img className=" w-full" src={`https://image.tmdb.org/t/p/original/${aModal.backdrop_path}`} />
                <p className="my-3">{aModal.overview}</p>
                <p>Data de lançamento: {aModal.release_date}</p>
                <p>Avaliação: {aModal.vote_average}</p>
            </Modal>
        </>
    );
}

export default Favoritos;