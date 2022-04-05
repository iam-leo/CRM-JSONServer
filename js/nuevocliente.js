import { mostrarAlerta, validar } from './funciones.js';
import { nuevoCliente } from './API.js';

(function(){
    const form = document.querySelector('#formulario');

    form.addEventListener('submit', validarForm);

    function validarForm(e) {
        e.preventDefault();

        //Obtenemos los valores de todos los inputs
        const cliente = Object.fromEntries( new FormData(e.target) );

        const inputsVacios = validar(cliente);

        if(inputsVacios){
            mostrarAlerta('Todos los campos son obligatorios.', 'error');
            return
        }

        //Si todo esta ok, mandamos el nuevo cliente a la API
        nuevoCliente(cliente);
    }
})();