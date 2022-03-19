import React from 'react'

const Formulario = () => {
    return (

        <div className="md:w-1/2 lg:w-2/5">  {/*En pantallas normales, se repartirá el espacio en un 50%, sin embargo, en pantallas mas grandes, sólo abarcará un 2/5*/}

            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes
            </h2>
            {/*Necesito que se separe del título, por lo que le añado un marginTop de 5p */}
            <p className='text-lg mt-5 text-center mb-10 '>Añadir pacientes  y {''}
                <span className='text-indigo-600 font-bold'>administrarlos :</span>
            </p>


            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" action="">
                {/* NOMBRE MASCOTA*/}
                <div className='mb-5'>
                    {/*Con la clase block, fuerzo a que ocupe todo el espacio 
                    Para hacerlo mas accesible, si alguien "pincha" sobre Nombre de mascota, se le habilita el input para que comience a escribir
                    */}
                    <label htmlFor="mascota" className="block text-gray-700 font-bold" >Nombre de la mascota: </label>
                    <input id="mascota"
                        type="text" placeholder='Por favor, introduzca el nombre de la mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
                    {/*con border-2 le añado un borde de cierto grossor y con w-full obligo a que utilice todo el espacio disponible */}
                </div>

                {/* NOMBRE PROPIETARIO*/}
                <div className='mb-5'>

                    <label htmlFor="Propietario" className="block text-gray-700 font-bold" >Nombre del propietario: </label>
                    <input id="Propietario"
                        type="text" placeholder='Por favor, introduzca el nombre del propietario de la mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
                </div>
                {/* CORREO ELECTRÓNICO*/}
                <div className='mb-5'>

                    <label htmlFor="email" className="block text-gray-700 font-bold" >Correo electrónico </label>
                    <input id="email"
                        type="email" placeholder='Por favor, introduzca un correo electrónico de contacto' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
                </div>
                {/* FECHA DEL ALTA*/}
                <div className='mb-5'>

                    <label htmlFor="Alta" className="block text-gray-700 font-bold" >Fecha del alta: </label>
                    <input id="Alta"
                        type="date" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
                </div>
                {/* DESCRIPCIÓN DE LOS SÍNTOMAS*/}
                <div className='mb-5'>

                    <label htmlFor="sintomas" className="block text-gray-700 font-bold" >Síntomas</label>
                    <textarea name="" id="sintomas" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Describe los síntomas' />
                </div>
                {/* BOTÓN DE SUBMIT PARA ENVIAR EL FORMULARIO/}
                {/*Al pasar por encima del botón de agregar paciente, cambiamos el color utilizando hover:bg-indigo-700 */}
                <input type="submit"
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700'
                    value="Agregar Paciente" />
            </form>
        </div>

    )
}

export default Formulario