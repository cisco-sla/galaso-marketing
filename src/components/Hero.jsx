import "./Hero.css";

/* creamos la función Hero. Con un destructuring obtenemos las propiedades, y 
se las pasamos a los componentes.*/

function Hero({ titulo, destacado, descripcion }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero__tarjeta">
        <div className="hero__foto">foto</div>
        <div className="hero__texto">
          <h1 className="hero__titulo">
            {titulo}
            <span className="hero__destacado">{destacado}</span>
          </h1>
          <p className="hero__descripcion">{descripcion}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
