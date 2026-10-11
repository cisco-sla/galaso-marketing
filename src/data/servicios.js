import imgBranding from "../assets/servicios/branding.webp";
import imgCapacitaciones from "../assets/servicios/capacitaciones.webp";
import imgCm from "../assets/servicios/cm.webp";
import imgInvestigacion from "../assets/servicios/investigacion_mercados.webp";
import imgPublicidad from "../assets/servicios/publicidaddigital.webp";
import imgWeb from "../assets/servicios/web.webp";

/* Creo una constante con todos los servicios como objetos con sus propiedades.
A su vez la propiedad descripción es un Array de textos que el archivo de ServiceCard lo toma indexado con un map. 
Despues en el archivo de la seccion Servicios.js toma las tarjetas de servicios.  
*/
export const servicios = [
  {
    id: "investigacion",
    titulo: "Investigación de mercados",
    descripcion: [
      "Encuestas, entrevistas y análisis estadístico para tomar decisiones basadas en datos, no en intuición.",
      "La investigación permite aprovechar oportunidades, prevenir riesgos, predecir movimientos de competidores y superar las expectativas del cliente.",
    ],
    imagen: imgInvestigacion,
  },
  {
    id: "branding",
    titulo: "Branding e Identidad visual",
    descripcion: ["Descripción pendiente.", "Bajada pendiente"],
    imagen: imgBranding,
  },
  {
    id: "community",
    titulo: "Community management",
    descripcion: ["Descripción pendiente.", "Bajada pendiente"],
    imagen: imgCm,
  },
  {
    id: "web",
    titulo: "Página Web y tienda online",
    descripcion: ["Descripción pendiente.", "Bajada pendiente"],
    imagen: imgWeb,
  },
  {
    id: "publicidad",
    titulo: "Publicidad digital",
    descripcion: ["Descripción pendiente.", "Bajada pendiente"],
    imagen: imgPublicidad,
  },
  {
    id: "capacitaciones",
    titulo: "Capacitaciones",
    descripcion: ["Descripción pendiente.", "Bajada pendiente"],
    imagen: imgCapacitaciones,
  },
];
