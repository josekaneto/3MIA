export default function FormContato(){
    return(
        <form className="form-contato">
            <div className="nome">
                <label className="form-label-nome"  htmlFor="nome">Nome:</label>
                <input className="form-input-nome" type="text" id="nome"/>
            </div>
            <div className="email">
                <label className="form-label-email" htmlFor="email">E-mail:</label>
                <input className="form-input-email" type="email" id="email" />
            </div>
            <div className="textarea">
                <label className="form-label-textarea" htmlFor="mensagem">Mensagem :</label>
                <textarea className="form-textarea" id="mensagem" cols="30" rows="10"></textarea>
            </div>
            <input className="contato-botao" type="button" value="Enviar" />
        </form>
    )
}