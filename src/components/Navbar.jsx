import "./Navbar.css";
import logo from "../assets/4GoldenSand_AInvisible.svg";

const enlaces = [
  { texto: "Sobre Mí", destino: "#sobre-mi" },
  { texto: "Mis servicios", destino: "#servicios" },
  { texto: "Portfolio", destino: "#portfolio" },
  { texto: "Mis artículos", destino: "#articulos" },
  { texto: "Contacto", destino: "#contacto" },
];

function Navbar() {
  return (
    <header className="navbar">
      <img
        src={logo}
        alt="logotipo de Galaso Marketing"
        className="navbar__logo"
      />
      <nav>
        <u1 className="navbar__lista">
          {enlaces.map((enlace) => (
            <li key={enlace.destino}>
              <a href={enlace.destino}>{enlace.texto}</a>
            </li>
          ))}
        </u1>
      </nav>
    </header>
  );
}

export default Navbar;
