import Corporativo from "../Corporativo/Corporativo";
import Individual from "../Individual/Individual";
import ProfissionalTime from "../Profissional-Time/Profissional-Time";


export default function Planos(){
    return(
        <section className="planos">
            <div>
                <h2>Planos</h2>
            </div>
            <div className="div-planos">
                <Individual/>
                <ProfissionalTime/>
                <Corporativo/>
            </div>
        </section>
    )   
}