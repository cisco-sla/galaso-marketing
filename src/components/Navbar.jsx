import "./Navbar.css";
import logo from "../assets/4GoldenSand_AInvisible.svg";

//creamos un Array con el menú.
const enlaces = [
  { texto: "Sobre Mí", destino: "#sobre-mi" },
  { texto: "Mis servicios", destino: "#servicios" },
  { texto: "Portfolio", destino: "#portfolio" },
  { texto: "Mis artículos", destino: "#articulos" },
  { texto: "Contacto", destino: "#contacto" },
];

/* creamos el componente, que retorne la cabecera,
con el logotipo, texto alternativo, y la funcion de navegación del menú.
El map recorre el array y define los items.*/

function Navbar() {
  return (
    <header className="navbar">
      <img
        src={logo}
        alt="logotipo de Galaso Marketing"
        className="navbar__logo"
      />
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
