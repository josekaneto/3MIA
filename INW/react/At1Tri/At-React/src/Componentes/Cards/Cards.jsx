export default function Cards(props) {
  return (
        <div className={props.cor}  >
          <div className="numero-logo">
            <p className="numero">{props.numero}</p>
            <div>
              <img
                className="imagem"
                src={props.imagem}
                alt="logo yotube"
              />
            </div>
          </div>
          <h3>{props.titulo}</h3>
          <p className="texto-cards">
            {props.paragrafo}
          </p>
        </div>
  );
}
