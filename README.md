# Gestión de citas para una clínica veterinaria :

 La aplicación web, está dedicada a la gestion de citas para pacientes. El usuario, mediante el formulario, debe de introducir los siguientes datos:
 
 
 - Nombre de la mascota
 - Nombre del propietario de la mascota
 - Un email de contacto
 - Fecha de alta del paciente
 - Descripción de síntomas

Al añadir un paciente, se creará tarjetas donde se contengan los datos, los cuales pueden ser editados o eliminados. En esta versión no se ha implementado un backend con uan base de datos donde guardar los datos, por los que esto no son persistentes, únicamente se hace uso de LocalStorage para que el usuario pueda hacer pruebas de la apliación.

Link: https://agcg1991.github.io/citas-react/

# Instalación: 

En primer lugar debes de clonar tu proyecto en local  

` git clone https://github.com/AGCG1991/citas-react.git`

Seguidamente accedemos al proyecto 

`cd citas-react`

Este proyecto ha sido desarrollado utilizando una librería de React, conocida como "Vite", para poder arrancar el proyecto, necesitamos por un lado tener instalado "NodeJs" e instalar las dependencias del proyecto, para ello

`node install vite@latest `

Una vez instalada las dependencias, podemos arrancar nuestro proyecto

`npm run dev `
Desde el navegador introducimos " http://localhost:3000/ " para poder visualizar el proyecto en local.
