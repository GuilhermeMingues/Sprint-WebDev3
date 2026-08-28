"use client";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">JOVI</div>

        <ul className="nav-links">
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#solucao">A Solução</a>
          </li>
          <li>
            <a href="#publico">Público-Alvo</a>
          </li>
          <li>
            <a href="#galeria">Galeria</a>
          </li>
          <li>
            <a href="#equipe">Nossa Equipe</a>
          </li>
        </ul>

        <a href="#solucao" className="nav-button">
          Conheça a JOVI
        </a>
      </nav>
    </header>
  );
}

export default Header;