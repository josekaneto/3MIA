import Twitter from "../../../public/Twitter.png"
import InstagramLogo from "../../../public/InstagramLogo.png"
import Discord from "../../../public/Discord.png"

export default function TextoContato(){
    return(

        <div className="contato">
            <div className="contato-titulo">
                <h1>Dúvidas e suporte, entre em contato:</h1>
            </div>
            <div className="contato-img">
                <img src={Twitter} alt="" />
                <img src={InstagramLogo} alt="" />
                <img src={Discord} alt="" />
            </div>
        </div>

        
    )
}