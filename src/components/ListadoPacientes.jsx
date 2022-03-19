import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = () => {
    return (

        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>{/*En pantallas normales, se repartirá el espacio en un 50%, sin embargo, en pantallas mas grandes, sólo abarcará un 3/5*/}
            {/* Utilizo overflow-y-scroll para generar un scroll que sólo abarque al componente ListadoPaciente
             Sin embargo, utilizamos md: en este caso para que elimine el el scroll en pantallas pequeñas, como las de dispositivos móviles
            */}
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
                Administra tus {""}
                <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
            </p>
            {/* LLamo al componente Paciente, una vez importado*/}
            <Paciente />

        </div>

    )
}

export default ListadoPacientes