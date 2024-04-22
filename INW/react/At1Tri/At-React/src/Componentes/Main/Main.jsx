import TextoHome from '../TextoHome/TextoHome'
import Imagem from '../ImgHome/ImgHome'
import Cards from '../Cards/Cards'

export default function Main(){
    return(
        <>
        <section className='section-home'>
            <div className="div-section-home">
                <TextoHome/>
                <Imagem/>
            </div>
        </section>
        <section className="cards-section">
            <div className="cards">
                <Cards cor="cor1" numero="01" imagem="../../../public/youtube.png" titulo="Youtube" paragrafo="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo."/>
                <Cards cor="cor2" numero="02" imagem="../../../public/Tiktok.png" titulo="Tik Tok" paragrafo="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok."/>
                <Cards cor="cor3" numero="03" imagem="../../../public/Facebook.png" titulo="Facebook" paragrafo="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."/>
                <Cards cor="cor4" numero="04" imagem="../../../public/Instagram.png" titulo="Instagram" paragrafo="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."/>
            </div>
        </section>
            
        </>
    )
}