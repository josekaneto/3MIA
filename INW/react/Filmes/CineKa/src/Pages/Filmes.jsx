import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Carousel, Modal, Button } from 'antd';

function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect( () =>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
        .then( response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    const [slides, setSlides] = useState([])

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
        .then (Response => Response.json() )
        .then(response => setSlides(response.results))
        .catch(error => console.log(error))
    })

    const [dataModal, setDataModal] = useState({});
    const [showModal, setShowModal] = useState(false);

    const moreDetail = items => {
        setShowModal(true);
        setDataModal(items);
      };
    
      const closeDetail = () => {
        setShowModal(false);
      };

    return (
        <>

        <Modal
          title={dataModal.title}
          open  = {showModal}
          footer={
            <Button  onClick={closeDetail} className="bg-primary-kaneto text-white hover:bg-none hover:border-primary-kaneto">
              Ok
            </Button>
          }
          onCancel={closeDetail}
        >
            <img src={dataModal.image} />
            <p> {dataModal.text} </p>
        </Modal>

            {/* <Carousel arrows infinite={false}>
                {
                    slides.map(
                        slide => (
                                <>
                                    <img src={`https://image.tmdb.org/t/p/w154/${slide.backdrop_path}`} alt="" />
                                </>
                        ) 
                    )
                }
            </Carousel>  */}


        <h2 className="text-white text-4xl mb-5 font-font-sub" >Em destaque</h2>
            <div className="listaFilmes flex flex-row gap-3 flex-wrap">
                {
                    filmes.map(
                        filme =>(
                            <>
                            <Carousel arrows infinite={false} className="text-black">
                                <div key={filme.id} className="card-filme bg-white text-black rounded-xl w-[150px]">
                                    <h1 className="text-lg text-center text-titulo-kaneto" key={filmes}>{filme.title}</h1>
                                    <img className="" src={`https://image.tmdb.org/t/p/w154/${filme.poster_path}`} alt="" />
                                    <Link onClick={()=> moreDetail(filme)} className="bg-primary-kaneto text-secondary-kaneto text-xl"><FaArrowAltCircleDown/></Link>
                                </div>
                            </Carousel>  
                              </>
                              
                            
                        )
                    )
                }
                
            </div>
        </>
    );
    
}

export default Filmes;

