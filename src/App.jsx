import { useState, useEffect } from "react"
import  Form from "./components/Form"
import './App.css'
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [paciente, setPaciente] = useState({});
  const initialState = () => JSON.parse(localStorage.getItem("pacientes")) || [];
  const [pacientes, setPacientes] = useState(initialState);


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <>
      <Header />
      <div className="container md:flex justify-center mx-auto pt-12">
        <Form
           pacientes={pacientes}
           setPacientes={setPacientes}
           paciente={paciente}
           setPaciente={setPaciente}
        />
        <ListadoPacientes
         pacientes={pacientes}
         setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
         />
      </div>
    </>

  )
}

export default App
