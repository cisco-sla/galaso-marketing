import "./PlanCard.css";

function PlanCard({ plan, incluye, fondo }) {
  //la funcion recibe 3 props. De Plan sacamos las variables para definir las caracterisiticas.
  const caracteristicas = [
    `${plan.redes} redes sociales.`,
    `${plan.posteos} posteos.`,
    `${plan.videos} videos.`,
    `${plan.historias} historias.`,
  ];

  return (
    <article className="plan-card">
      <img className="plan-2card__imagen" src={fondo} alt="" />
      <div className="plan-card__velo"></div>
      <div className="plan-card__contenido">
        <h3 className="plan-card__nombre">{plan.nombre}</h3>

        <div className="plan-card__detalle">
          <ul className="plan-card__lista">
            {caracteristicas.map((caracteristica) => (
              <li key={caracteristica}>{caracteristica}</li>
            ))}
          </ul>
          <ul className="plan-card__lista">
            {incluye.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <a className="plan-card__precio" href="#contacto">
          ARS ${plan.precio.toLocaleString("es-AR")}
        </a>
      </div>
    </article>
  );
}

export default PlanCard;
