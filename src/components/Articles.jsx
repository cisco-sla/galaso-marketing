import "./Articles.css";
import iconoWhatsapp from "../assets/logos-rrss/WhatsApp_GoldenSand.png";
import { canalWhatsapp } from "../data/enlaces";

/*Sección simple, donde se arma el bloque con con un botón que 
lleva a la dirección del canal de whatsapp declarado en el archivo enlaces.js 
en una pestaña nueva (target _blank) y parrafos referidos. 
*/

function Articles() {
  return (
    <section className="articles" id="articulos">
      <h2 className="articles__titulo">Mis Artículos</h2>
      <div className="articles__panel">
        <a
          className="articles__boton"
          href={canalWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir el canal de Whatsapp con los artículos (se abre en una pestaña nueva)"
        >
          <span>¡Encuentrálos haciendo click aqui!</span>
          <img className="articles__icono" src={iconoWhatsapp} alt="" />
        </a>
        <p>
          Reflexiones, ejemplos y análisis sobre Marketing, marcas, comunicación
          y el comportamiento de las personas. También compartiré información y
          las fuentes detrás de mis videos de Youtube.
        </p>
        <p>
          <strong>¿Querés leerlos cuando publique uno nuevo?</strong> Sumate a
          mi canal de Whatsapp y recibí los nuevos artículos directamente a tu
          móvil.
        </p>
      </div>
    </section>
  );
}

export default Articles;
