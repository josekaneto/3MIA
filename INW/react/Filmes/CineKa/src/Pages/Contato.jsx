function Contato() {
    return ( 
        <div className="flex">
        <div className="w-2/4 p-24">
            <div className="contato-titulo">
                <h1>Dúvidas e suporte, entre em contato:</h1>
            </div>
        </div>
        <div className=" h-[520px] bg-white w-1"  />
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
        </div>
    );
}

export default Contato;