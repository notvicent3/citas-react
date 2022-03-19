import React from 'react'

const Formulario = () => {
    return (

        <div className="md:w-1/2 lg:w-2/5">  {/*En pantallas normales, se repartirá el espacio en un 50%, sin embargo, en pantallas mas grandes, sólo abarcará un 2/5*/}

            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes
            </h2>
            {/*Necesito que se separe del título, por lo que le añado un marginTop de 5p */}
            <p className='text-lg mt-5 text-center '>Añadir pacientes  y {''}
                <span className='text-indigo-600 font-bold'>administrarlos :</span>
            </p>


            <form action="">
                
            </form>
        </div>

    )
}

export default Formulario