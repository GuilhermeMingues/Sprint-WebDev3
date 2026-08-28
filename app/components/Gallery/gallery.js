"use client";

function Gallery() {
  return (
    <section id="galeria" className="section gallery">
      <div className="section-title">
        <span>03 — GALERIA</span>

        <h2>
          Conheça o conceito
          <strong>JOVI.</strong>
        </h2>

        <p>
          Uma representação visual da proposta do projeto Smartphone Brasil.
        </p>
      </div>

      <div className="gallery-grid">
        <article className="gallery-item large">
          <div className="gallery-phone">
            <div className="camera"></div>

            <div className="gallery-logo">JOVI</div>
          </div>

          <div className="gallery-caption">
            <span>CONCEITO 01</span>
            <h3>Design do Smartphone</h3>
          </div>
        </article>

        <article className="gallery-item">
          <div className="gallery-content">
            <span>CONCEITO 02</span>

            <h3>Tecnologia</h3>

            <p>
              Uma identidade visual moderna para representar a proposta da JOVI.
            </p>
          </div>
        </article>

        <article className="gallery-item">
          <div className="gallery-content">
            <span>CONCEITO 03</span>

            <h3>Smartphone Brasil</h3>

            <p>Um projeto pensado a partir da realidade brasileira.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Gallery;
