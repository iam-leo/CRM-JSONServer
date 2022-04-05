const url = 'http://localhost:4000/clientes';

//Cuando se crea un nuevo cliente
export const nuevoCliente = async cliente => {
    let exito;
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-type': 'application/json'
            }
        });

        //Redirigimos al index
        window.location.href = 'index.html';

        //Guardamos en localStorage informacion para validar la alerta
        localStorage.setItem('alerta', 'true');
        //Devolvemos un true que nos hará falta luego para mostrar alerta success
        return exito = true;
    } catch (error) {
        console.log(error);
    }
}

//Obtener todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//Obtener un cliente por su id
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

//Eliminar Cliente
export const eliminarCliente = async id =>{
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//Editar Cliente
export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`,{
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-type': 'application/json'
            }
        });

        //Redirigimos al index
        window.location.href = 'index.html';

        //Guardamos en localStorage informacion para validar la alerta
        localStorage.setItem('alerta', 'true');
        //Devolvemos un true que nos hará falta luego para mostrar alerta success
        return exito = true;
    } catch (error) {
        console.log(error);
    }
}