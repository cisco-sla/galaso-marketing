/* Cada plan es un objeto. Se agrega una variable mas con las 
propiedades que son  compartidas por todos los planes. La lógica es la 
misma que con la sección Servicios. Este archivo contiene las variables y 
las exporta. El archivo PlanCard.jsx es la estructura rehutilizable para 
mostrar la información. Y todo eso llega al Plans.jsx que se encarga de
moldear todo.  
 */

export const planes = [
  {
    id: "presencia",
    nombre: "Plan de Presencia",
    redes: 2,
    posteos: 8,
    videos: 2,
    historias: 15,
    precio: 290000,
  },
  {
    id: "impulso",
    nombre: "Plan de Impulso",
    redes: 2,
    posteos: 12,
    videos: 3,
    historias: 20,
    precio: 450000,
  },
  {
    id: "crecimiento",
    nombre: "Plan de Crecimiento",
    redes: 3,
    posteos: 16,
    videos: 5,
    historias: 30,
    precio: 550000,
  },
];

export const incluyeTodos = [
  "Gestión de comentarios",
  "Gestión de mensajes",
  "Informe de métricas",
];
