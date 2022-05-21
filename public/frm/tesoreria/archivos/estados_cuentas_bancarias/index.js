inicializador_formulario();

function inicializador_formulario() {
    focus('#nombre');
    siguiente_campo('#nombre',  '#boton-guardar', true);
    buscar_estados_cuentas_bancarias();
    id_estado_cuenta_bancaria = 0
}

function editar_linea(xthis) {
   // modificado = false
    id_estado_cuenta_bancaria = xthis.parentElement.parentElement.getAttribute('data-id_estado_cuenta_bancaria')
    const tds = xthis.parentElement.parentElement.children
    const nombre = tds[0].innerText
    document.getElementById('nombre').value = nombre
    focus('#nombre')
    document.getElementById('boton-guardar').innerHTML = '<i class="fas fa-pencil-alt"></i> Modificar'
}

function agregar_linea() {
   // modificado = false
    id_estado_cuenta_bancaria = 0
    document.getElementById('nombre').value = ''
    focus('#nombre')
    document.getElementById('boton-guardar').innerHTML = '<i class="fas fa-plus"></i> Agregar'
}

function eliminar_linea(xthis){
    id_estado_cuenta_bancaria_eliminar = xthis.parentElement.parentElement.getAttribute('data-id_estado_cuenta_bancaria')
    mensaje_confirmar("Estas seguro de eliminar este registro?", "Eliminar", "guardar_eliminar()")
}


function guardar() {
    if (validar_formulario()) {
        if (id_estado_cuenta_bancaria === 0) {
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
async function buscar_estados_cuentas_bancarias() {
    let buscar = document.getElementById('buscar').value;
    let url = `/api/v1/estados_cuentas_bancarias?buscar=${buscar}`;
    var parametros = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-estados_cuentas_bancarias');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.datos) {
            let linea = `<tr data-id_estado_cuenta_bancaria=${json.datos[item].id}>
            <td>${json.datos[item].nombre}</td>
            <td class="text-center">
<button type="button" class="btn btn-outline-warning btn-sm" onclick='editar_linea(this)'>
<i class="fas fa-pencil-alt"></i>
</button>
<button type="button" class="btn btn-outline-danger btn-sm" 
onclick='eliminar_linea(this)'>
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
    let url = '/api/v1/estados_cuentas_bancarias';
    let nombre = document.getElementById('nombre').value;
    //let sucursal = document.getElementById('sucursal').value;
    var data = {
        nombre: nombre
       
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
    buscar_estados_cuentas_bancarias();
    agregar_linea();
};

async function guardar_modificar() {
    let url = `/api/v1/estados_cuentas_bancarias/${id_estado_cuenta_bancaria}`;
    let nombre = document.getElementById('nombre').value;
    //let sucursal = document.getElementById('sucursal').value;
    let data = {
        nombre: nombre,    
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
    buscar_estados_cuentas_bancarias();
    agregar_linea();
};

async function guardar_eliminar(){
    let url = `api/v1/estados_cuentas_bancarias/${id_estado_cuenta_bancaria_eliminar}`;

    var data = {};

    var paramentros = {
        method:'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    var datos = await fetch(url, paramentros)
    const json = await datos.json();
   //console.log(json);
    buscar_estados_cuentas_bancarias();
}

