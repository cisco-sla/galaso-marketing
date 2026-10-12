import "./ProjectCard.css";

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
