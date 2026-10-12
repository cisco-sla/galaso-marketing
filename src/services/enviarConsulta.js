import { claveWeb3Forms } from "..//data/enlaces";

const URL_ENVIO = "https://api.web3forms.com/submit";

export async function enviarConsulta({ nombre, email, mensaje, botcheck }) {
  const respuesta = await fetch(URL_ENVIO, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: claveWeb3Forms,
      subject: "Nueva consulta desde la web",
      name: nombre,
      email: email,
      message: mensaje,
      botcheck: botcheck,
    }),
  });
  const resultado = await respuesta.json();

  if (!respuesta.ok || !resultado.success) {
    throw new Error(resultado.message || "No se pudo enviar la consulta.");
  }
}
