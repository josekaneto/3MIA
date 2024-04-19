export default function Individual(){
    return(
        <div className="plano-individual">
                        <div className="plano-individual-titulo">
                            <h3>Individual</h3>
                        </div>
                        <div className="plano-individual-lista">
                            <label className="plano-individual-lista-label" htmlFor="planos">1 Usuário</label>
                            <input className="plano-individual-lista-input" list="planos"/>
                            <datalist id="planos">
                                <option  value="10 vídeos R$15"/>
                            </datalist>
                        </div>
                        <div className="plano-individual-button">
                            <input className="plano-individual-botao" type="button" value="Cadastrar" />
                        </div>
        </div>
    )
}