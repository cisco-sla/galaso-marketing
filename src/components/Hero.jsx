import "./Hero.css";

/* creamos la función Hero. Con un destructuring obtenemos las propiedades,
que están definidas en el App.jsx (las propiedades en este caso viajan de padre -App.jsx- al hijo - Hero.jsx)  
*/

function Hero({ titulo, destacado, descripcion, foto, altFoto }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero__tarjeta">
        <img className="hero__foto" src={foto} alt={altFoto} />
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
