import React from 'react'
import { useState, useEffect } from 'react';

const Formulario = () => {

    {/* [variable,funcion] = useState(valorInicial) */ }
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");

    {/* */}
    const [error, setError] = useState(false);

    {/*Validamos el formulario */ }
    const handleSubmit = evento => {
        evento.preventDefault();
        {/*El include verifica que al menos uno de los elementos está vacío...*/ }
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log("Hay al menos un campo vacío")
            setError(true)
        } else {
            console.log("Todos los campos fueron rellenados correctamente")
        }
    }

    return (

        <div className="md:w-1/2 lg:w-2/5 mx-5">  {/*En pantallas normales, se repartirá el espacio en un 50%, sin embargo, en pantallas mas grandes, sólo abarcará un 2/5*/}

            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes
            </h2>
            {/*Necesito que se separe del título, por lo que le añado un marginTop de 5p */}
            <p className='text-lg mt-5 text-center mb-10 '>Añadir pacientes  y {''}
                <span className='text-indigo-600 font-bold'>administrarlos :</span>
            </p>

            <form onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" action="">
                {/* NOMBRE MASCOTA*/}
                <div className='mb-5'>
                    {/*Con la clase block, fuerzo a que ocupe todo el espacio 
                    Para hacerlo mas accesible, si alguien "pincha" sobre Nombre de mascota, se le habilita el input para que comience a escribir
                    */}
                    <label htmlFor="mascota" className="block text-gray-700 font-bold" >Nombre de la mascota: </label>
                    {/*con border-2 le añado un borde de cierto grossor y con w-full obligo a que utilice todo el espacio disponible */}
                    <input id="mascota" type="text" placeholder='Por favor, introduzca el nombre de la mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={nombre} onChange={(evento) => setNombre(evento.target.value)} />
                    {/*Va a registrar los eventos de cambios gracias a onChange */}

                </div>

                {/* NOMBRE PROPIETARIO*/}
                <div className='mb-5'>

                    <label htmlFor="Propietario" className="block text-gray-700 font-bold" >Nombre del propietario: </label>
                    <input id="Propietario"
                        type="text" placeholder='Por favor, introduzca el nombre del propietario de la mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={propietario} onChange={(evento) => setPropietario(evento.target.value)} />
                </div>
                {/* CORREO ELECTRÓNICO*/}
                <div className='mb-5'>

                    <label htmlFor="email" className="block text-gray-700 font-bold" >Correo electrónico </label>
                    <input id="email"
                        type="email" placeholder='Por favor, introduzca un correo electrónico de contacto' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email} onChange={(evento) => setEmail(evento.target.value)} />
                </div>
                {/* FECHA DEL ALTA*/}
                <div className='mb-5'>

                    <label htmlFor="Alta" className="block text-gray-700 font-bold" >Fecha del alta: </label>
                    <input id="Alta"
                        type="date" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={fecha} onChange={(evento) => setFecha(evento.target.value)} />
                </div>
                {/* DESCRIPCIÓN DE LOS SÍNTOMAS*/}
                <div className='mb-5'>

                    <label htmlFor="sintomas" className="block text-gray-700 font-bold" >Síntomas</label>
                    <textarea name="" id="sintomas" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Describe los síntomas'
                        value={sintomas} onChange={(evento) => setSintomas(evento.target.value)} />
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