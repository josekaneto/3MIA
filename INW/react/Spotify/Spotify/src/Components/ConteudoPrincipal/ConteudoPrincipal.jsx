import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ConteudoPrincipal({children}) {

  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/artistas")
      .then((res) => res.json())
      .then((data) => setArtistas(data))
      .catch((err) => console.log(err))
      .finally(() => console.log("Finalizou a requisição"));
  }, []);



  return (
    <main className="flex flex-col bg-slate-400 w-3/4">
<>
            <div className="p-10">
              <h1 className="text-2xl font-bold">Trap</h1>
              <div className="flex w-full p-5">
                {artistas
                  .filter((artista) => artista.genero.includes("Trap"))
                  .map((artista) => (
                    <Link to={`/artistas/${artista._id}`}>
                    <div className="bg-pink-700 h-40 w-40 flex flex-col justify-around items-center rounded-xl mr-14">
                      <h1>{artista.name}</h1>
                    </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* <div>
              <h1>Rap</h1>
              <div>
                {artistas
                  .filter((artista) => artista.genero.includes("Rap"))
                  .map((artista) => (
                    <div className="bg-pink-700 h-28 w-28 flex flex-col justify-around items-center">
                      <h1>{artista.name}</h1>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <h1>Pop</h1>
              <div>
                {artistas
                  .filter((artista) => artista.genero.includes("Pop"))
                  .map((artista) => (
                    <div className="bg-pink-700 h-28 w-28 flex flex-col justify-around items-center">
                      <h1>{artista.name}</h1>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <h1>Funk</h1>
              <div>
                {artistas
                  .filter((artista) => artista.genero.includes("Funk"))
                  .map((artista) => (
                    <div className="bg-pink-700 h-28 w-28 flex flex-col justify-around items-center">
                      <h1>{artista.name}</h1>
                    </div>
                  ))}
              </div>
            </div> */}

          </>
    </main>
  );
}

export default ConteudoPrincipal;
