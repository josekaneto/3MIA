import  data  from "../../artigos.json";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <h2 className="font-font-sub font-black text-5xl text-white flex justify-center my-10">Cine News</h2>
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
                                <NavLink onClick={()=>document.getElementById('my_modal_3').showModal()}  className="text-sm font-font-sub justify-start mx-3 text-hover-color">leia mais</NavLink>
                            </div>
                            
                        </div>

                        <dialog  id="my_modal_3" className="modal w-2/5 rounded-2xl bg-black border-2 border-primary-kaneto">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-2xl text-4xl btn-circle btn-ghost absolute left-2 text-white">🠔</button>
                                </form>
                                <img className="p-10" key={filme.image} src={filme.image} alt=""/>
                                <div className="mx-10 mb-5 text-justify" >
                                {
                                    filme.text.map( text => (
                                        <p  className=" text-xl font-font-text text-white" key={text}>{text}</p>
                                    ))
                                }
                                </div>
                            </div>
                        </dialog>
                        
                        </>
                    )
                    )

                    
                }
                
            </div>

            

        </>
    );
}

export default Home;