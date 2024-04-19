export default function ProfissionalTime(){
    return(
        <div className="profissional-time">
                        <div className="profissional-time-titulo">
                            <h3>Profissional - Times</h3>
                        </div>
                        <div className="profissional-time-lista">
                            <label className="profissional-time-lista-label" htmlFor="1-10">1 - 10 Usuários</label>
                            <input className="profissional-time-lista-input" list="1-10"/>
                            <datalist id="1-10">
                                <option  value="Vídeos ilimitados R$40"/>
                            </datalist>
                                     <label className="profissional-time-lista-label" htmlFor="+10">+10 Usuário</label>
                            <input className="profissional-time-lista-input" list="+10" />
                            <datalist id="+10">
                                <option  value="Vídeos ilimitados R$20"/>
                            </datalist>
                        </div>
                        <div className="profissional-time-button">
                            <input className="profissional-time-botao" type="button" value="Cadastrar" />
                        </div>
        </div>
    )
}