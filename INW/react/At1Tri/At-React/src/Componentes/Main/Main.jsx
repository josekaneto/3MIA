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
            <Cards/>
        </>
    )
}