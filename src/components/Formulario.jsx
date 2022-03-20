import { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    {/* [variable,funcion] = useState(valorInicial) */ }
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])




    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }
    {/*Validamos el formulario */ }

    const handleSubmit = (e) => {

        e.preventDefault();

        // Validación del Formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            {/*El include verifica que al menos uno de los elementos está vacío...*/ }

            console.log('Hay Al Menos un campo vacio')

            setError(true)
            return;
        }

        setError(false)


        // Objeto de Paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if (paciente.id) {
            // Editando el Registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            // Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        // Reiniciar el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

    return (

        <div className="md:w-1/2 lg:w-2/5 mx-5"> {/*En pantallas normales, se repartirá el espacio en un 50%, sin embargo, en pantallas mas grandes, sólo abarcará un 2/5*/}
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            {/*Necesito que se separe del título, por lo que le añado un marginTop de 5p */}

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    {/* NOMBRE MASCOTA*/}

                    {/*Con la clase block, fuerzo a que ocupe todo el espacio 
                    Para hacerlo mas accesible, si alguien "pincha" sobre Nombre de mascota, se le habilita el input para que comience a escribir
                    */}
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre de la mascota:
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Por favor, introduzca el nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}

                    /> {/*Va a registrar los eventos de cambios gracias a onChange */}
                </div>

                {/* NOMBRE PROPIETARIO*/}

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Por favor, introduzca el nombre del propietario de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                {/* CORREO ELECTRÓNICO*/}

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Por favor, introduzca un correo electrónico de contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* FECHA DEL ALTA*/}

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                {/* DESCRIPCIÓN DE LOS SÍNTOMAS*/}
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Síntomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                {/* BOTÓN DE SUBMIT PARA ENVIAR EL FORMULARIO/}
                {/*Al pasar por encima del botón de agregar paciente, cambiamos el color utilizando hover:bg-indigo-700 */}
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    )
}

export default Formulario
