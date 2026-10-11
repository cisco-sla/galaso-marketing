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
    descripcion: [
      "Diseño de logotipo, paleta de colores, tipografías y lineamientos para que tu marca tenga una imagen propia y coherente.",
      "Una identidad sólida te hace reconocible, transmite confianza y te diferencia de la competencia.",
    ],
    imagen: imgBranding,
  },
  {
    id: "community",
    titulo: "Community management",
    descripcion: [
      "Creación de contenido, publicaciones, gestión de comentarios y mensajes, e informes de métricas de tus redes sociales.",
      "Una comunidad activa y bien atendida construye vínculos con tus clientes y genera oportunidades de venta.",
    ],
    imagen: imgCm,
  },
  {
    id: "web",
    titulo: "Página Web y tienda online",
    descripcion: [
      "Diseño y desarrollo de sitios web y tiendas online rápidos, adaptados a celulares y con la identidad de tu marca.",
      "Es tu negocio abierto las 24 horas: un lugar propio donde te encuentran, conocen tu propuesta y pueden comprarte.",
    ],
    imagen: imgWeb,
  },
  {
    id: "publicidad",
    titulo: "Publicidad digital",
    descripcion: [
      "Diseño y gestión de campañas en redes sociales y buscadores, con segmentación por intereses, ubicación y comportamiento.",
      "Permite llegar a las personas indicadas, medir cada resultado y optimizar la inversión para conseguir más clientes.",
    ],
    imagen: imgPublicidad,
  },
  {
    id: "capacitaciones",
    titulo: "Capacitaciones",
    descripcion: [
      "Talleres y capacitaciones prácticas sobre marketing digital, redes sociales y comunicación de marca para emprendedores y equipos.",
      "Aprender estas herramientas da autonomía para gestionar tu propia marca y tomar mejores decisiones.",
    ],
    imagen: imgCapacitaciones,
  },
];
