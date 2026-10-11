import "./ServiceCard.css";

/*Creo la función ServiceCard que luego reutilizaré. El componente ServiceCard recibe 3 props: 
titulo, descripcion e imagen y los desestructura. Esto es la estructura para todas las tarjetas. 
*/

function ServiceCard({ titulo, descripcion, imagen }) {
  return (
    <article className="service-card" tabIndex={0}>
      <img className="service-card__imagen" src={imagen} alt="" />
      <div className="service-card__velo"></div>
      <h3 className="service-card__titulo">{titulo}</h3>
      <div className="service-card__detalle">
        {descripcion.map((parrafo, indice) => (
          <p key={indice}>{parrafo}</p>
        ))}
      </div>
    </article>
  );
}

export default ServiceCard;
