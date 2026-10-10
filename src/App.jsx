import Navbar from "./components/Navbar";
import Hero from "./components//Hero";

/*creamos la función para que devuelva los componentes que necesitamos. Al Hero, le pasamos las props (titulo, destacado, etc.)
 */

function App() {
  return (
    <>
      <Navbar />;
      <Hero
        titulo="Hago que tu negocio"
        destacado="se vea, conecte y crezca."
        descripcion="Ayudo a emprendedores, profesionales y empresas a construir una marca sólida, mejorar su presencia digital y llegar a más clientes."
      />
    </>
  );
}

export default App;
