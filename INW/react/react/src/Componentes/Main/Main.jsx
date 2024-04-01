import Contact from "../Contact/Contact";
import Infos from "../Infos/Infos";
import Skills from "../Skill/Skills";

function Main(){
    return(
    <div class="mainInfo">
        <section id="info">
            <Infos/>
            <Skills/>
        </section>
        <Contact/>
    </div>
    )
}

export default Main