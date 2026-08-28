"use client";

function Contato() {
  return (
    <section id="contato" className="section contact">
      <div className="section-title">
        <span>05 — CONTATO</span>

        <h2>
          Fale com a<strong>equipe JOVI.</strong>
        </h2>

        <p>
          Dúvidas sobre o projeto ou sobre a solução? Manda uma mensagem ou usa
          um dos canais abaixo.
        </p>
      </div>

      <div className="contact-grid">
        <form className="contact-form" action="#" method="post">
          <div className="form-row">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="voce@email.com"
              required
            />
          </div>

          <div className="form-row">
            <label htmlfor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Conte o que você quer saber sobre a JOVI"
              required
            ></textarea>
          </div>

          <button type="submit" className="button primary">
            Enviar mensagem
          </button>
        </form>

        <address className="contact-info">
          <h3>Outros canais</h3>

          <ul>
            <li>
              <span>E-mail</span>EletricMinds@gmail.com.br
            </li>
            <li>
              <span>Site</span>EletricMinds.com.br
            </li>
            <li>
              <span>Instagram</span>@EletricMinds
            </li>
            <li>
              <span>Suporte</span> · Via email ou DM | seg–sex, 9h–18h
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
}

export default Contato;
