import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos CSS de Bootstrap
// import * as bootstrap from 'bootstrap'; // Importa todos los componentes JavaScript de Bootstrap
import './App.css'
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Footer from "./component/Footer"

const App = () => {
return(
 <>
      <Navbar />
      <Home/> 
      <Footer />
  </>

  ) 
}

export default App