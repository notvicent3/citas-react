import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
function App() {


  return (
    /*Class es una palabra reservada de Js, pero estamos utilizando "html" , existen conflictos, por lo que usaremos className */
    <div className="container mx-auto mt-20 " >
      <Header />
      {/*Utilizo md:flex para evitar que los componentes se sobrepongan uno sobre el otro. El componente salta a la siguiente línea*/}
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>


    </div>
  )
}

export default App
