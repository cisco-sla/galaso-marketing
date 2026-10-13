import { useState } from "react";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";
import { categorias, proyectos } from "../data/proyectos";

/* importamos useState para que guarde la informacion sobre el filtro 
activo. La lógica es: Se setean 2 constantes. La primera con una tupla donde registra el estado, y aplica el cambio.
se setea como default en "Todos". La otra variable anida funciones y agrega condicionales 
en la constante "proyectosVisibles" haciendo un if/else en caso que detecte una 
categoría filtrada. 
En pantalla la funcion reorna título, el filtro por categorías (para ello 
se usa un map y se anida una funcion arrow al botón. A los botones se 
les asigna el evento onClick como disparador para setear la "categoriaActiva")
Finalmente, segun que proyectos visibles queden se arma la ProjectCard pasando 
las props.   
*/

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
