"use client";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <span className="tag">SMARTPHONE BRASIL</span>

        <h1>
          Tecnologia pensada
          <span>para o Brasil.</span>
        </h1>

        <p>
          A JOVI apresenta uma nova proposta de smartphone, desenvolvida para
          aproximar tecnologia e necessidades do público brasileiro.
        </p>
      </div>

      <div className="hero-buttons">
        <a href="#solucao" className="button primary">
          Conheça a solução
        </a>

        <a href="#galeria" className="button secondary">
          Ver projeto
        </a>
      </div>
    </section>
  );
}

export default Hero;
