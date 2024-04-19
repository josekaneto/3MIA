import ImgPlanos from "../../../public/iconeCelular.png"

export default function Corporativo(){
    return(
        <div className="corporativo">
        <div className="corporativo-titulo">
            <h3>Individual</h3>
        </div>
        <div className="corporativo-img">
            <img src={ImgPlanos} alt="" />
        </div>
        <div className="corporativo-button">
            <input className="corporativo-botao" type="button" value="Entre em Contato" />
        </div>
       
    </div>

    )
}