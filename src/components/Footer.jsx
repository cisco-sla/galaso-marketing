import "./Footer.css";
import logo from "../assets/4GoldenSand_AInvisible.svg";
import { datosContacto, redesSociales } from "../data/enlaces";

function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__contenido">
        <div className="footer__marca">
          <img className="footer__logo" src={logo} alt="Galaso Marketing" />
          <p className="footer__eslogan">
            Hago que tu negocio{" "}
            <span className="footer__destacado">se vea, conecte y crezca.</span>
          </p>
        </div>

        <div>
          <h2 className="footer__titulo">Contacto</h2>
          <ul className="footer__lista">
            <li>
              <a href={`tel:${datosContacto.telefono.replaceAll(" ", "")}`}>
                {datosContacto.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${datosContacto.email}`}>
                {datosContacto.email}
              </a>
            </li>
            <li>{datosContacto.ubicacion}</li>
          </ul>
        </div>

        <nav aria-label="Redes sociales">
          <h2 className="footer__titulo">Redes</h2>
          <ul className="footer__lista">
            {redesSociales.map((red) => (
              <li key={red.id}>
                <a href={red.url} target="_blank" rel="noopener noreferrer">
                  {red.nombre}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="footer__legal">
        © {anio} Galaso Marketing. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
