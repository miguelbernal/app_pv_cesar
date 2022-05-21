inicializador_formulario();

function inicializador_formulario() {
    focus('#nombre');
    siguiente_campo('#nombre', '#direccion', false);
    siguiente_campo('#direccion', '#telefono', false);
    siguiente_campo('#telefono', '#email', false);
    siguiente_campo('#email', '#boton-guardar', true);
    buscar_sucursales();
    id_sucursal = 0;
}

// llamadas al servidor
async function buscar_sucursales() {
    let buscar = document.getElementById('buscar').value;
    let url = `/api/v1/sucursales?buscar=${buscar}`;
    var parametros = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-sucursales');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.datos) {
            let linea = `<tr datos-id_sucursal=${json.datos[item].id}>
                            <td>${json.datos[item].nombre}</td>
                            <td>${json.datos[item].direccion}</td>
                            <td>${json.datos[item].telefono}</td>
                            <td>${json.datos[item].email}</td>
                            <td class="text-center">
                                <button type="button" class="btn btn-outline-warning btn-sm" onclick='editar_linea(this)'>
                                    <i class="fas fa-pencil-alt"></i>
                                </button>
                                <button type="button" class="btn btn-outline-danger btn-sm" onclick='eliminar_linea(this)'>
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>`;
            lineas += linea;
        }
    }
    if (lineas === '') {
        lineas = `<tr><td colspan="8" class="text-center">No hay registros....<td><tr>`
    }
    tbody.innerHTML = lineas;
}

function editar_linea(xthis) {
    id_sucursal = xthis.parentElement.parentElement.getAttribute('datos-id_sucursal')
    const tds = xthis.parentElement.parentElement.children
    const nombre = tds[0].innerText
    const direccion = tds[1].innerText
    const telefono = tds[2].innerText
    const email = tds[3].innerText
    document.getElementById('nombre').value = nombre
    document.getElementById('direccion').value = direccion
    document.getElementById('telefono').value = telefono
    document.getElementById('email').value = email
    focus('#nombre')
    document.getElementById('boton-guardar').innerHTML = '<i class="bi bi-pencil-fill"></i>  Modificar'
}

function agregar_linea() {
    id_sucursal = 0
    document.getElementById('nombre').value = ''
    document.getElementById('direccion').value = ''
    document.getElementById('telefono').value = ''
    document.getElementById('email').value = ''
    focus('#nombre')
        document.getElementById('boton-guardar').innerHTML = '<i class="bi bi-plus-lg"></i>  Agregar'
}

function eliminar_linea(xthis) {
    id_sucursal_eliminar = xthis.parentElement.parentElement.getAttribute('datos-id_sucursal')
    mensaje_confirmar('Seguro que quiere eliminar este registro?', 'Eliminar', 'guardar_eliminar()')
}

function guardar() {
    if (validar_formulario()) {
        if (id_sucursal === 0) {
            guardar_agregar()
        } else {
            guardar_modificar()
        }
    }
};

function validar_formulario() {
    let ok = true
    const nombre = document.getElementById('nombre')
    const direccion = document.getElementById('direccion')
    const telefono = document.getElementById('telefono')
    const email = document.getElementById('email')
    limpiar_mensaje_formulario()
    if (nombre.value.trim() === '') {
        mensaje_formulario('#nombre','Nombre vacio.')
        ok = false
    } else if (direccion.value.trim() === '') {
        mensaje_formulario('#direccion','Dirección vacia.')
        ok = false
    } else if (telefono.value.trim() === '') {
        mensaje_formulario('#telefono','Teléfono vacio.')
        ok = false
    } else if (email.value.trim() === '') {
        mensaje_formulario('#email','Email vacio.')
        ok = false
    }
    return ok
};

async function guardar_agregar() {
    let url = '/api/v1/sucursales';
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let data = {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        email: email    
    };
    var parametros = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    var datos = await fetch(url, parametros);
    const json = await datos.json();
    buscar_sucursales();
    agregar_linea();
};

async function guardar_modificar() {
    let url = `/api/v1/sucursales/${id_sucursal}`;
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let data = {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        email: email  
    };
    let parametros = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    let datos = await fetch(url, parametros);
    const json = await datos.json();
    buscar_sucursales();
    agregar_linea();
};

async function guardar_eliminar() {
    let url = `/api/v1/sucursales/${id_sucursal_eliminar}`;
    let data = {};
    let parametros = {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    let datos = await fetch(url, parametros);
    const json = await datos.json();
    buscar_sucursales();
};