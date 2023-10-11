import React from 'react'
import Pacientes from './Pacientes'



const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className=' lg:w-3/5 md:w-1/2 h-screen overflow-x-scroll'>
      {pacientes && pacientes.length ? (
       <>
          <h2 className='font-black text-3xl text-center '>Pacientes</h2>
          <p className='text-2xl mt-5 mb-10 text-center'>Administra tus {''} <span className='text-indigo-600 font-bold'>Pacientes y citas</span></p>
          {pacientes.map((paciente) => (
            <Pacientes
              key={paciente.id}  // Utiliza el ID como clave
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
       </>

      ) :
        (
          <>
            <h2 className='font-black text-3xl text-center '>No Hay pacientes</h2>
            <p className='text-2xl mt-5 mb-10 text-center'>Comienza Agregando {''} <span className='text-indigo-600 font-bold'>Pacientes y citas</span></p>
          </>
        )
      }
    </div>
  )
}

export default ListadoPacientes