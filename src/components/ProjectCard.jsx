import "./ProjectCard.css";

/* Función para crear la estructura de las tarjetas. Idem a Planes y
y Servicios. Recibe props, desestructura y Portfolio usa el esqueleto 
para llenarlo con los datos de proyectos.js
*/

function ProjectCard({ titulo, categoria, descripcion }) {
  return (
    <article className="project-card">
      <span className="project-card__categoria">{categoria}</span>
      <h3 className="project-card__titulo">{titulo}</h3>
      <p className="project-card__descripcion">{descripcion}</p>
    </article>
  );
}

export default ProjectCard;
