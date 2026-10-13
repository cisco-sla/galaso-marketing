import "./Services.css";
import ServiceCard from "./ServiceCard";
import { servicios } from "../data/servicios";

/* Función para traer los servicios desde servicios.js. 
Luego con el map le indicamos los datos para las service cards.*/

function Services() {
  return (
    <section className="services" id="servicios">
      <h2 className="services__titulo">Mis Servicios</h2>
      <div className="services__grilla">
        {servicios.map((servicio) => (
          <ServiceCard
            key={servicio.id}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
            imagen={servicio.imagen}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
