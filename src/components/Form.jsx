import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error';
import { v4 as uuidv4 } from 'uuid';

const Form = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);


  useEffect(() => {
    if(Object.keys(paciente).length > 0){
       setNombre(paciente.nombre)
       setApellido(paciente.apellido)
       setEmail(paciente.email)
       setFecha(paciente.fecha)
       setSintomas(paciente.sintomas)

    }
  }, [paciente])

  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombre, apellido, email, fecha, sintomas].includes('')){
      setError(true)
      return;

    }
    setError(false)

    const objetoPaciente = {
      nombre,
      apellido,
      email,
      fecha,
      sintomas

    }
    if(paciente.id){
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      objetoPaciente.id = uuidv4()
      setPacientes([...pacientes, objetoPaciente])
    }




    //reiniciar form
    setNombre('')
    setApellido('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }
  return (
    <div className=' md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center '>Formulario</h2>
      <p className='text-2xl mt-5 mb-10'>Añadir pacientes y {''} <span className=' text-indigo-800 font-bold'>Administralos</span></p>

      <form onSubmit={handleSubmit} className='m-3 bg-white shadow-lg px-5 py-10 rounded-xl'>
        {error && <Error><p>Completar todos los campos</p></Error>}
        <div className='mb-5'>
          <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>Nombre Paciente:</label>
          <input
          id='nombre'
          type="text"
          placeholder='Nombre'
          className='border-2 w-full mt-2 placeholder-gray-400 rounded-md'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='apellido' className='block text-gray-700 uppercase font-bold'>Apellido Paciente:</label>
          <input
            id='apellido'
            type="text"
            placeholder='Apellido'
            className='border-2 w-full mt-2 placeholder-gray-400 rounded-md'
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email:</label>
          <input
            id='email'
            type="text"
            placeholder='Email'
            className='border-2 w-full mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Fecha de alta:</label>
          <input
            id='alta'
            type="date"
            className='border-2 w-full mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

        </div>
        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Descripción de los síntomas:</label>
          <textarea name=""
            id="sintomas"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
            placeholder='Decripción de Síntomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />

        </div>

        <input
        type="submit"
          className='bg-indigo-600 w-full text-white p-3 uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors'
          value={paciente.id ? 'editar paciente' : 'Agregar Paciente'}

        />
      </form>
      </div>
  )
}

export default Form