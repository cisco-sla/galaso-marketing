import { useState } from "react";
import "./Contact.css";
import { enviarConsulta } from "../services/enviarConsulta";

const datosIniciales = {
  nombre: "",
  email: "",
  mensaje: "",
  botcheck: false,
};

function validar(datos) {
  const errores = {};
  if (datos.nombre.trim().length < 2) {
    errores.nombre = "Escribí tu nombre.";
  }
  if (!/^\S+@\S+\.\S+$/.test(datos.email)) {
    errores.email = "Escribí un email válido.";
  }
  if (datos.mensaje.trim().length < 10) {
    errores.mensaje = "Contame tu consulta (mínimo 10 caracteres).";
  }

  return errores;
}

function Contact() {
  const [datos, setDatos] = useState(datosIniciales);
  const [errores, setErrores] = useState({});
  const [estado, setEstado] = useState("inactivo");

  function manejarCambio(evento) {
    const { name, value, type, checked } = evento.target;
    setDatos({ ...datos, [name]: type === "checkbox" ? checked : value });
  }

  async function manejarEnvio(evento) {
    evento.preventDefault();

    const erroresEncontrados = validar(datos);
    setErrores(erroresEncontrados);
    if (Object.keys(erroresEncontrados).length > 0) {
      return;
    }
    setEstado("enviando");
    try {
      await enviarConsulta(datos);
      setEstado("exito");
      setDatos(datosIniciales);
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
      setEstado("error");
    }
  }

  return (
    <section className="contact" id="contacto">
      <h2 className="contact__titulo">Contacto</h2>

      <form className="contact__formulario" onSubmit={manejarEnvio} noValidate>
        <div className="contact__campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            value={datos.nombre}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.nombre)}
          />
          {errores.nombre && <p className="contact__error">{errores.nombre}</p>}
        </div>

        <div className="contact__campo">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={datos.email}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.email)}
          />
          {errores.email && <p className="contact__error">{errores.email}</p>}
        </div>

        <div className="contact__campo">
          <label htmlFor="mensaje">Consultas</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={datos.mensaje}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.mensaje)}
          />
          {errores.mensaje && (
            <p className="contact__error">{errores.mensaje}</p>
          )}
        </div>

        <input
          className="contact__trampa"
          type="checkbox"
          name="botcheck"
          checked={datos.botcheck}
          onChange={manejarCambio}
          tabIndex={-1}
          autoComplete="off"
        />

        <button
          className="contact__boton"
          type="submit"
          disabled={estado === "enviando"}
        >
          {estado === "enviando" ? "Enviando..." : "Enviar consulta"}
        </button>

        {estado === "exito" && (
          <p className="contact__mensaje contact__mensaje--exito" role="status">
            ¡Gracias! Recibí tu consulta y te responderé a la brevedad.
          </p>
        )}
        {estado === "error" && (
          <p className="contact__mensaje contact__mensaje--error" role="alert">
            No se pudo enviar tu consulta. Probá de nuevo en unos minutos.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
