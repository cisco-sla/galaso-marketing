import "./Plans.css";
import PlanCard from "./PlanCard";
import { planes, incluyeTodos } from "../data/planes";
import fondoPlanes from "../assets/planes/planes2.webp";

/*Función Plans. Con el map itero todo lo que hay en data/planes 
y pasa cada objeto completo como props*/

function Plans() {
  return (
    <section className="plans" id="planes">
      <h2 className="plans__titulo">Planes de Community Management</h2>
      <div className="plans__grilla">
        {planes.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            incluye={incluyeTodos}
            fondo={fondoPlanes}
          />
        ))}
      </div>
    </section>
  );
}

export default Plans;
