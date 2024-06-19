import  data  from "../../artigos.json";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
        <h2 className="font-font-sub font-black text-5xl text-white flex justify-center ">Cine News</h2>
        <div className="grid grid-cols-2">
        {
            data.map(
                (filme, index) => (
                    <>
                    <div className="card bg-card text-white m-3 flex justify-around rounded-2xl h-[95%]" key={index} >
                        <img className=" w-2/5 rounded-l-2xl " src={filme.image} alt="" />
                        <div className="flex flex-col">
                            <h1 className="text-2xl text-center my-2 text-titulo-kaneto"  key={filme.title}>{filme.title}</h1>
                            <div className="tags flex justify-center" >
                            {
                                filme.tags.map( tag => (
                                    <span className="bg-primary-kaneto text-secondary-kaneto p-1 m-1 rounded text-xs" key={tag}>{tag}</span>
                                ))
                            }
                            </div>
                            <div className="mx-3 my-3 text-justify" >
                            {
                                filme.text.map( text => (
                                    <p  className=" text-xs font-font-text" key={text}>{text}</p>
                                ))
                            }
                            </div>
                            <NavLink className="text-sm font-font-sub justify-start mx-3 hover:text-hover-color">leia mais</NavLink>
                        </div>
                        
                    </div>
                    
                    </>
                )
                )
            }
            
        </div>
        </>
    );
}

export default Home;