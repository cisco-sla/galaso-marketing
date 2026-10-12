import { useState } from "react";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";
import { categorias, proyectos } from "../data/proyectos";

function Portfolio() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const proyectosVisibles =
    categoriaActiva === "Todos"
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.categoria === categoriaActiva);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__titulo">Portfolio</h2>

      <div className="portfolio__filtros">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            type="button"
            className={
              categoria === categoriaActiva
                ? "portfolio__filtro portfolio__filtro--activo"
                : "portfolio__filtro"
            }
            aria-pressed={categoria === categoriaActiva}
            onClick={() => setCategoriaActiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="portfolio__grilla">
        {proyectosVisibles.map((proyecto) => (
          <ProjectCard
            key={proyecto.id}
            titulo={proyecto.titulo}
            categorias={proyecto.categoria}
            descripcion={proyecto.descripcion}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
