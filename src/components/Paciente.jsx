
const Paciente = () => {
    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            {/*NOMBRE */}
            <p className='"font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
                <span className='"font-normal normal-case'>Hook</span>
            </p>
            {/*PROPIETARIO*/}
            <p className='"font-bold mb-3 text-gray-700 uppercase' >Propietario: {""}
                <span className='"font-normal normal-case'>Hook</span>
            </p>
            {/*CORREO ELECTRÓNICO */}
            <p className='"font-bold mb-3 text-gray-700 uppercase'> Correo electrónico {""}
                <span className='"font-normal normal-case'>Hook</span>
            </p>
            {/*FECHA ALTA */}
            <p className='"font-bold mb-3 text-gray-700 uppercase'> Fecha Alta {""}
                <span className='"font-normal normal-case'>Hook</span>
            </p>
            {/*SÍNTOMAS*/}
            <p className='"font-bold mb-3 text-gray-700 uppercase'> Síntomas {""}
                <span className='"font-normal normal-case'>Hook</span>
            </p>
        </div>
    )
}

export default Paciente