import "./Navbar.css";
import logo from "../assets/7Original_BAmethystSmoke.webp";

//creamos un Array con los objetos del menú, cada uno con 2 propiedades.
const enlaces = [
  { texto: "Sobre Mí", destino: "#sobre-mi" },
  { texto: "Mis servicios", destino: "#servicios" },
  { texto: "Portfolio", destino: "#portfolio" },
  { texto: "Mis artículos", destino: "#articulos" },
  { texto: "Contacto", destino: "#contacto" },
];

/* creamos la función, que retorne la cabecera, con el logotipo (con 
texto alternativo y enlace al inicio), y la funcion de navegación del menú.
El map recorre el array y define los items de la lista.*/

function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="navbar__inicio">
        <img
          src={logo}
          alt="logotipo de Galaso Marketing, ir al inicio"
          className="navbar__logo"
        />
      </a>
      <nav>
        <ul className="navbar__lista">
          {enlaces.map((enlace) => (
            <li key={enlace.destino}>
              <a href={enlace.destino}>{enlace.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
