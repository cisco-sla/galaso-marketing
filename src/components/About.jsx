import "./About.css";
import imagenAbout from "../assets/fgalaso_about.webp";

//Array de textos por fuera de la función. Si en el futuro se desea cambiar algo del copy se modifica el array sin tocar la logica.

const parrafos = [
  "Mi nombre es Francisco Javier Galaso, Licenciado en Comercialización de Salta Capital.",
  "Siempre me intrigó entender por qué algunas marcas consiguen destacarse frente a la competencia y permanecer en la memoria de las personas. Como no quería quedarme únicamente con la intuición, decidí formarme universitariamente y complementar mis estudios con distintos cursos.",
  "A lo largo de los años también adquirí experiencia en ventas y atención al cliente, lo que me permitió conocer el otro lado del proceso: entender qué buscan las personas, cómo toman decisiones y qué hace que elijan una opción por sobre otra.",
  "Hoy aprovecho esa combinación de formación y experiencia para ayudar a emprendedores, profesionales y empresas a mejorar su presencia y comunicarse mejor con sus clientes.",
];

// aqui armo la función de la seccion "Sobre Mi". Hago un map y lo indexo para que sepa su posicion.
function About() {
  return (
    <section className="about" id="sobre-mi">
      <h2 className="about__titulo">Sobre Mí</h2>
      <div className="about__contenido">
        <img
          className="about__foto"
          src={imagenAbout}
          alt="Francisco Javier Galaso trabajando"
        />
        <div className="about__texto">
          {parrafos.map((parrafo, indice) => (
            <p key={indice}>{parrafo}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
