import  data  from "../../artigos.json";

function Home() {
    return (
        <>
        <div className="grid grid-cols-3">
        {
            data.map(
                (filme, index) => (
                    <>
                    <div className="card bg-black text-white m-5 flex flex-col justify-around rounded-2xl" key={index} >
                        <h1 className="text-3xl text-center my-5 text-titulo-kaneto"  key={filme.title}>{filme.title}</h1>
                        <img className="w-full" src={filme.image} alt="" />
                        <div className="tags m-4" >
                        {
                            filme.tags.map( tag => (
                                <span className="bg-primary-kaneto text-secondary-kaneto p-1 m-1 rounded" key={tag}>{tag}</span>
                            ))
                        }
                        </div>
                        <div className="mx-4 mb-4 text-justify" >
                        {
                            filme.text.map( text => (
                                <p  className="" key={text}>{text}</p>
                            ))
                        }
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