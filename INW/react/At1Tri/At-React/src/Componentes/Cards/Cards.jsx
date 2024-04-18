export default function Cards() {
  return (
    <section className="cards-section">
      <div className="cards">
        <div className="card1">
          <div className="numero-logo">
            <p className="numero">01</p>
            <div>
              <img
                className="imagem"
                src="../../../public/youtube.png"
                alt="logo yotube"
              />
            </div>
          </div>
          <h3>Youtube</h3>
          <p className="texto-cards">
            Produza conteúdo cativante e conquiste seu público com vídeos de
            alta qualidade no maior palco digital do mundo.
          </p>
        </div>
        <div className="card2">
          <div className="numero-logo">
            <p className="numero">02</p>
            <div>
              <img src="../../../public/Tiktok.png" alt="logo tik tok" />
            </div>
          </div>
          <h3>Tik Tok</h3>
          <p className="texto-cards">
            Faça sua criatividade brilhar em vídeos curtos e envolventes que vão
            cativar a comunidade global do TikTok.
          </p>
        </div>
        <div className="card3">
          <div className="numero-logo">
            <p className="numero">03</p>
            <div>
              <img src="../../../public/Facebook.png" alt="logo Facebook" />
            </div>
          </div>
          <h3>Facebook</h3>
          <p className="texto-cards">
            Conecte-se com sua audiência de forma autêntica e impactante através
            de vídeos que se destacam no feed do Facebook.
          </p>
        </div>
        <div className="card4">
          <div className="numero-logo">
            <p className="numero">04</p>
            <div>
              <img src="../../../public/Instagram.png" alt="logo Instagram" />
            </div>
          </div>
          <h3>Instagram</h3>
          <p className="texto-cards">
            Compartilhe suas histórias de maneira única e conquiste milhões de
            likes no Instagram utilizando Stories e Reels.
          </p>
        </div>
      </div>
    </section>
  );
}
