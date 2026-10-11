import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import fotoPerfil from "./assets/fran_mkt2.webp";

/*creamos la función para que devuelva los componentes que necesitamos. Al Hero, le pasamos las props (titulo, destacado, etc.)
 */

function App() {
  return (
    <>
      <Navbar />
      <Hero
        titulo="Hago que tu negocio"
        destacado="se vea, conecte y crezca."
        descripcion="Ayudo a emprendedores, profesionales y empresas a construir una marca sólida, mejorar su presencia digital y llegar a más clientes."
        foto={fotoPerfil}
        altFoto="Francisco Javier Galaso, Licenciado en Comercialización"
      />
      <About />
      <Services />
    </>
  );
}

export default App;
