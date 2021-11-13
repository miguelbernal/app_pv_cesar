inicializar_formulario();

function inicializar_formulario() {
    document.getElementById('nombre').select();
    siguiente_campo('#nombre', '#boton-guardar', true, true);
    buscar_usuarios();
    id_usuario = 0;
    id_rol = 0;
}

function guardar() {
    if (validar_formulario()) {
        if(id_rol === 0){
            guardar_agregar();
        } else {
            guardar_modificar();
        }
    }
}

function eliminar_linea(xthis){
    id_rol_eliminar = xthis.parentElement.parentElement.getAttribute('data-id_rol');
    mensaje_confirmar("¿Está seguro de eliminar este registro?", "Eliminar", "guardar_eliminar()");
}

function validar_formulario() {
    let mensaje = document.getElementById('panel-formulario-mensaje');
    mensaje.classList.add('d-none');
    mensaje.innerHTML = '';
    let ok = true;
    let nombre = document.getElementById('nombre');
    if (nombre.value.trim() === '') {
        nombre.select();
        mensaje.classList.remove('d-none');
        mensaje.innerHTML = "Nombre vacio.";
        ok = false;
    }
    return ok;
}

function agregar_linea(){
    id_rol = 0;
    document.getElementById('nombre').value = '';
    focus('#nombre');
    document.getElementById('boton-guardar').innerHTML = '<i class="fas fa-plus"></i> Agregar';
}

function editar_linea(xthis){
    id_rol = xthis.parentElement.parentElement.getAttribute('data-id_rol');
    const tds = xthis.parentElement.parentElement.children;
    const nombre = tds[0].innerText;
    document.getElementById('nombre').value = nombre;
    focus('#nombre');
    document.getElementById('boton-guardar').innerHTML = '<i class="fas fa-pencil-alt"></i> Modificar';
}

// Llamadas al Servidor
async function buscar_usuarios() {
    let url = '/api/usuarios/buscar';
    let buscar = document.getElementById('buscar').value;
    let data = {
        buscar: buscar,
    };
    var parametros = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-usuarios');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.data) {
            let linea = `<tr data-id_usuario=${json.data[item].id} data-id_rol=${json.data[item].id_rol}>
                            <td>${json.data[item].nombre}</td>
                            <td>${json.data[item].usuario}</td>
                            <td>${json.data[item].email}</td>
                            <td>${json.data[item].clave}</td>
                            <td>${json.data[item].nombre_rol}</td>
                            <td class="text-center">
                                <button class="btn btn-outline-warning btn-sm" onclick='editar_linea(this)'>
                                    <i class="fas fa-pencil-alt"></i>
                                </button>
                                <button class="btn btn-outline-danger btn-sm" onclick='eliminar_linea(this)'>
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>`;
             lineas += linea;
        }
    }
    if(lineas === ''){
        lineas = `<tr><td colspan="2" class="text-center">No existen registros ...</td></tr>`;
    }
    tbody.innerHTML = lineas;
}

async function guardar_agregar(){
    let url = '/api/usuarios';
    let nombre = document.getElementById('nombre').value;

    var data = {
        nombre: nombre,
    };

    var parametros = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    
    var datos = await fetch(url, parametros)
    const json = await datos.json();
    console.log(json);
    buscar_usuarios();
    agregar_linea();
}

async function guardar_modificar(){
    let url = 'api/usuarios';
    let nombre = document.getElementById('nombre').value;

    var data = {
        id_rol: id_rol,
        nombre: nombre,
    };

    var parametros = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    var datos = await fetch(url, parametros)
    const json = await datos.json();
    console.log(json);
    buscar_usuarios();
    agregar_linea();
}

async function guardar_eliminar(xthis){
    let url = '/api/usuarios';
    
    var data = {
        id_rol: id_rol_eliminar,
    };

    var parametros = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    var datos = await fetch(url, parametros)
    const json = await datos.json();
    console.log(json);
    buscar_usuarios();
}

// BUSCAR ROLES
async function buscar_rol() {
    let url = '/api/roles/buscar';
    let buscar = document.getElementById('rol').value;

    var data = {
        buscar: buscar,
    };

    var parametros = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-elegir-rol');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.data) {
            let linea = `<tr data-id_rol=${json.data[item].id} onclick="elegir_rol(this)">
                            <td>${json.data[item].nombre}</td>
                         </tr>`;
            lineas += linea;
        }
    }
    if (lineas === '') {
        lineas = `<tr><td class="text-center">No existen registros ...</td></tr>`;
    }
    tbody.innerHTML = lineas;
}

function elegir_rol(xthis) {
    id_rol = parseInt(xthis.getAttribute('data-id_rol'));
    const tds = xthis.children;
    const nombre = tds[0].innerText;
    document.getElementById('rol').value = nombre;
    salir_buscador('modal-buscador-rol');
}