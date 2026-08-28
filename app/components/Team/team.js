"use client";

function Team() {
  return (
    <section id="equipe" className="section team">
      <div className="section-title">
        <span>04 — NOSSA EQUIPE</span>

        <h2>
          Quem desenvolveu
          <strong> a Eletric Minds?</strong>
        </h2>

        <p>
          Conheça os integrantes responsáveis pelo desenvolvimento do projeto.
        </p>
      </div>

      <div className="team-grid">
        <article className="member">
          <div className="member-number">01</div>

          <h3>Murillo Padula</h3>

          <span>RM 571620</span>
        </article>

        <article className="member">
          <div className="member-number">02</div>

          <h3>Renato Munhoz</h3>

          <span>RM 573570</span>
        </article>

        <article className="member">
          <div className="member-number">04</div>

          <h3>Guilherme Mingues</h3>

          <span>RM5685670</span>
        </article>

        <article className="member">
          <div className="member-number">05</div>

          <h3>Gabriel Vianna</h3>

          <span>RM 571475</span>
        </article>
      </div>
    </section>
  );
}

export default Team;
