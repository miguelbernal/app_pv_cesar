mostrar_nombre_programa("Modulo");

inicializar_formulario()

function inicializar_formulario(){
    focus('#nombre')
    siguiente_campo('#nombre','#boton-guardar', true)
    buscar_modulo()
    id_modulo = 0
}

function editar_linea(xthis){
    id_modulo = xthis.parentElement.parentElement.getAttribute('data-id_modulo')
    const tds = xthis.parentElement.parentElement.children
    const nombre = tds[0].innerText
    document.getElementById('nombre').value = nombre
    focus('#nombre')
    document.getElementById('boton-guardar').innerHTML = '<i class="bi bi-pencil"></i> Modificar'
}

function agregar_linea(){
    id_modulo = 0
    document.getElementById('nombre').value = ''
    focus('#nombre')
    document.getElementById('boton-guardar').innerHTML = '<i class="bi bi-plus-lg"></i> Agregar'
}

function eliminar_linea(xthis){
    id_modulo_eliminar = xthis.parentElement.parentElement.getAttribute('data-id_modulo')
    mensaje_confirmar('¿Está seguro de eliminar este registro?','Eliminar','guardar_eliminar()')
}

function guardar(){
    if (validar_formulario()) {
        if (id_modulo === 0) {
            guardar_agregar()
        } else {
            guardar_modificar()
        }
    }
}

function validar_formulario(){
    let ok = true
    const nombre = document.getElementById('nombre')
    limpiar_mensaje_formulario()
    if (nombre.value.trim() === '') {
        mensaje_formulario('#nombre','Nombre vacio.')
        ok = false
    }
    return ok
}

// Llamadas al Servidor
async function buscar_modulos() {
    let buscar = document.getElementById('buscar').value;
    let url = `/api/v1/modulos?buscar=${buscar}`;
    
    var parametros = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-modulos');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.datos) {
            let linea = `<tr data-id_modulo=${json.datos[item].id}>
                            <td>${json.datos[item].nombre}</td>
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
    if(lineas === ''){
        lineas = `<tr><td colspan="2" class="text-center">No existen registros ...</td></tr>`;
    }
    tbody.innerHTML = lineas;
}

async function guardar_agregar(){
    let url = '/api/v1/modulos';
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
    buscar_modulos();
    agregar_linea();
}

async function guardar_modificar(){
    let url = `/api/v1/modulos/${id_modulo}`;
    let nombre = document.getElementById('nombre').value;

    var data = {
        nombre: nombre
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
    buscar_modulos();
    agregar_linea();
}

async function guardar_eliminar(){
    let url = `/api/v1/modulos/${id_modulo_eliminar}`;

    var data = {};

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
    buscar_modulos();
}

