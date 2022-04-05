import { obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta, validar } from './funciones.js';

(function(){

    //Campos del form
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);

        //Obtener el form
        const form = document.querySelector('#formulario');
        form.addEventListener('submit', validarForm);
    });

    function mostrarCliente(cliente) {
        const { nombre, email, telefono, empresa, id } = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;

    }

    function validarForm(e) {
        e.preventDefault();

        //Obtenemos los valores de todos los inputs
        const cliente = Object.fromEntries( new FormData(e.target) );

        cliente.id = parseInt(cliente.id);

        const inputsVacios = validar(cliente);

        if(inputsVacios){
            mostrarAlerta('Todos los campos son obligatorios.', 'error');
            return
        }

        editarCliente(cliente);
    }
})();