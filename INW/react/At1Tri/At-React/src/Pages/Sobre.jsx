import ImgSobre from "../Componentes/ImgSobre/ImgSobre";
import Planos from "../Componentes/Planos/Planos";
import TextoSobre from "../Componentes/TextoSobre/TextoSobre";

export default function Sobre(){
    return(
        <>
            <section className="section-sobre">
                <div className="texto-img-sobre">
                    <div className="div-texto-sobre">
                        <TextoSobre/>
                    </div>
                    <div className="img-sobre">
                        <ImgSobre/>
                    </div>
                </div>
            </section>
            <Planos/>
        </>
    )
}