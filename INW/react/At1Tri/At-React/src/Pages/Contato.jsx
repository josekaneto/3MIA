import FormContato from "../Componentes/FormContato/FormContato";
import TextoContato from "../Componentes/TextoContato/TextoContato";

export default function Contato(){
    return(
        <section className="section-contato">
            <TextoContato/> 
            <hr/>
            <FormContato/>
        </section>
        
    )
}