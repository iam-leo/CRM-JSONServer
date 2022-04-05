import { eliminarCliente, nuevoCliente } from "./API.js";

//ALERTA DE ERROR AL CREAR CLIENTE
export function mostrarAlerta(mensaje, tipo) {
    if(tipo === 'error'){
    const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
    });

    Toast.fire({
        icon: 'error',
        title: `ERROR! ${mensaje}`
    });

    } else{
        const existeAlerta = localStorage.getItem('alerta') || [];

        if (nuevoCliente && existeAlerta !== 'false'){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: mensaje
            });

            localStorage.setItem('alerta', 'false');
        }
    }
}

//ALERTA CLIENTE ELIMINADO
export function alertaClienteEliminado() {
    const clienteEliminado = localStorage.getItem('alertaClienteEliminado');

    if(clienteEliminado === 'exito'){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: 'Cliente eliminado!'
        });

        localStorage.setItem('alertaClienteEliminado', '');
    }
}

//Confrimación eliminar cliente
export function confirmarEliminacion(clienteId){
    Swal.fire({
        title: 'Estás seguro/a?',
        text: "Se eliminará el cliente seleccionado.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            eliminarCliente(clienteId);
            localStorage.setItem('alertaClienteEliminado', 'exito');
        }
      })
}

export function validar(obj){
    //Validamos que los inputs no esten vacíos
    const inputsVacios = !Object.values(obj).every(input => input !== '');

    return inputsVacios;
}