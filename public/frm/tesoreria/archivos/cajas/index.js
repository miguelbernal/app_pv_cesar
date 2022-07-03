mostrar_nombre_programa("Cajas");

inicializador_formulario();

function inicializador_formulario() {
    focus('#nombre');
    siguiente_campo('#nombre', '#sucursal', false);
    siguiente_campo('#sucursal', '#boton-guardar', true);
    buscar_cajas();
    id_caja = 0
}

function editar_linea(xthis) {
   // modificado = false
    id_caja = xthis.parentElement.parentElement.getAttribute('data-id_caja')
    id_sucursal = xthis.parentElement.parentElement.getAttribute('data-id_sucursal')
    const tds = xthis.parentElement.parentElement.children
    const nombre = tds[0].innerText
    const sucursal = tds[1].innerText
    document.getElementById('nombre').value = nombre
    document.getElementById('sucursal').value = sucursal
    focus('#nombre')
    document.getElementById('boton-guardar').innerHTML = '<i class="fas fa-pencil-alt"></i> Modificar'
}

function agregar_linea() {
   // modificado = false
    id_caja = 0
    id_sucursal = 0
    document.getElementById('nombre').value = ''
    document.getElementById('sucursal').value = ''
    focus('#nombre')
    document.getElementById('boton-guardar').innerHTML = '<i class="fas fa-plus"></i> Agregar'
}

function eliminar_linea(xthis) {
    id_caja_eliminar = xthis.parentElement.parentElement.getAttribute('datos-id_caja')
    mensaje_confirmar('Seguro que quiere eliminar este registro?', 'Eliminar', 'guardar_eliminar()')
}

function guardar() {
    if (validar_formulario()) {
        if (id_caja === 0) {
            guardar_agregar()
        } else {
            guardar_modificar()
        }
    }
}

function validar_formulario() {
    let ok = true
    const nombre = document.getElementById('nombre')  
    limpiar_mensaje_formulario()
   // const sucursal = document.getElementById('sucursal')
    if (nombre.value.trim() === '') {
        mensaje_formulario('#nombre', 'Nombre vacio.')
        ok = false
   // } else if (sucursal.value.trim() === '') {
       // mensaje_formulario('#sucursal', 'Sucursal vacia.')
       // ok = false
    }
    return ok
}

// llamadas al servidor
async function buscar_cajas() {
    let buscar = document.getElementById('buscar').value;
    let url = `/api/v1/cajas?buscar=${buscar}`;
    var parametros = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-cajas');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.datos) {
            let linea = `<tr data-id_caja=${json.datos[item].id} data-id_sucursal=${json.datos[item].id_sucursal}>
                            <td>${json.datos[item].nombre}</td>
                            <td>${json.datos[item].nombre_sucursal}</td>
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
        lineas = `<tr><td colspan="6" class="text-center">No existen registros ...</td></tr>`;
    }
    tbody.innerHTML = lineas;
}

async function guardar_agregar() {
    let url = '/api/v1/cajas';
    let nombre = document.getElementById('nombre').value;
    //let sucursal = document.getElementById('sucursal').value;
    var data = {
        nombre: nombre,
        id_sucursal: id_sucursal  
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
    buscar_cajas();
    agregar_linea();
};

async function guardar_modificar() {
    let url = `/api/v1/cajas/${id_caja}`;
    let nombre = document.getElementById('nombre').value;
    //let sucursal = document.getElementById('sucursal').value;
    let data = {
        nombre: nombre,
        id_sucursal: id_sucursal       
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
    buscar_cajas();
    agregar_linea();
};

async function guardar_eliminar() {
    let url = `/api/v1/cajas/${id_cajas_eliminar}`;
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
    buscar_cajas();
};

// Sucursales
async function buscar_sucursal() {
    let buscar = document.getElementById('sucursal').value;
    let url = `/api/v1/sucursales?buscar=${buscar}`;

    var parametros = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-elegir-sucursal');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.datos) {
            let linea = `<tr data-id_sucursal=${json.datos[item].id} onclick="elegir_sucursal(this)">
                            <td>${json.datos[item].nombre}</td>
                         </tr>`;
            lineas += linea;
        }
    }
    if (lineas === '') {
        lineas = `<tr><td class="text-center">No existen registros ...</td></tr>`;
    }
    tbody.innerHTML = lineas;
}

function elegir_sucursal(xthis) {
    id_sucursal = parseInt(xthis.getAttribute('data-id_sucursal'));
    const tds = xthis.children;
    const nombre = tds[0].innerText;
    document.getElementById('sucursal').value = nombre;
    salir_buscador('modal-buscador-sucursal');
}
