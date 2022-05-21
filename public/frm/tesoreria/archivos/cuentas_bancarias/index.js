inicializar_formulario();

console.log('cuentas_bancarias')

function inicializar_formulario() {
    focus('#numero_cuenta');
    siguiente_campo('#numero_cuenta', '#titular_cuenta', false);
    siguiente_campo('#titular_cuenta', '#tipo_cuenta_bancaria', false);
    siguiente_campo('#tipo_cuenta_bancaria', '#banco', false);
    siguiente_campo('#banco', '#estado_cuenta_bancaria', false);
    siguiente_campo('#estado_cuenta_bancaria', '#saldo', false);
    siguiente_campo('#saldo', '#boton-guardar', true);
    buscar_cuentas_bancarias();
    id_cuenta_bancaria = 0
}

function editar_linea(xthis) {
    id_cuenta_bancaria = xthis.parentElement.parentElement.getAttribute('data-id_cuenta_bancaria')
    id_tipo_cuenta_bancaria = xthis.parentElement.parentElement.getAttribute('data-id_tipo_cuenta_bancaria')
    id_banco = xthis.parentElement.parentElement.getAttribute('data-id_banco')
    id_estado_cuenta_bancaria = xthis.parentElement.parentElement.getAttribute('data-id_estado_cuenta_bancaria')
    const tds = xthis.parentElement.parentElement.children
    const numero_cuenta = tds[0].innerText
    const titular_cuenta = tds[1].innerText
    const tipo_cuenta_bancaria = tds[2].innerText
    const banco = tds[3].innerText
    const estado_cuenta_bancaria = tds[4].innerText
    const saldo = tds[5].innerText 
    document.getElementById('numero_cuenta').value = numero_cuenta
    document.getElementById('titular_cuenta').value = titular_cuenta
    document.getElementById('tipo_cuenta_bancaria').value = tipo_cuenta_bancaria
    document.getElementById('banco').value = banco
    document.getElementById('estado_cuenta_bancaria').value = estado_cuenta_bancaria
    document.getElementById('saldo').value = saldo
    focus('#numero_cuenta')
    document.getElementById('boton-guardar').innerHTML = '<i class="fas fa-pencil-alt"></i> Modificar'
}

function agregar_linea() {
   // modificado = false
    id_cuenta_bancaria = 0
    id_tipo_cuenta_bancaria = 0
    id_banco = 0
    id_estado_cuenta_bancaria = 0
    document.getElementById('numero_cuenta').value = ''
    document.getElementById('titular_cuenta').value = ''
    document.getElementById('tipo_cuenta_bancaria').value = ''
    document.getElementById('banco').value = ''
    document.getElementById('estado_cuenta_bancaria').value = ''
    document.getElementById('saldo').value = ''
    focus('#numero_cuenta')
    document.getElementById('boton-guardar').innerHTML = '<i class="fas fa-plus"></i> Agregar'
}

function eliminar_linea(xthis) {
    id_cuenta_bancaria_eliminar = xthis.parentElement.parentElement.getAttribute('data-id_cuenta_bancaria')
    mensaje_confirmar('Seguro que quiere eliminar este registro?', 'Eliminar', 'guardar_eliminar()')
}

function guardar() {
    if (validar_formulario()) {
        if (id_cuenta_bancaria === 0) {
            guardar_agregar()
        } else {
            guardar_modificar()
        }
    }
}

function validar_formulario() {
    let ok = true
    const numero_cuenta = document.getElementById('numero_cuenta')
    const titular_cuenta = document.getElementById('titular_cuenta')
    limpiar_mensaje_formulario()
    if (numero_cuenta.value.trim() === '') {
        mensaje_formulario('#numero_cuenta', 'Numero vacio.')
        ok = false
    } else if (titular_cuenta.value.trim() === '') {
       mensaje_formulario('#titular_cuenta', 'Titular de cuenta vacio.')
        ok = false
    }
    return ok
}

// llamadas al servidor
async function buscar_cuentas_bancarias() {
    let buscar = document.getElementById('buscar').value;
    let url = `/api/v1/cuentas_bancarias?buscar=${buscar}`;
    var parametros = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    var datos = await fetch(url, parametros)
    const json = await datos.json();
    console.log(json);
    const tbody = document.getElementById('tbody-datos-cuentas_bancarias');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.datos) {
            let linea = `<tr data-id_cuenta_bancaria=${json.datos[item].id} data-id_tipo_cuenta_bancaria=${json.datos[item].id_tipo_cuenta_bancaria}
            data-id_banco=${json.datos[item].id_banco} data-id_estado_cuenta_bancaria=${json.datos[item].id_estado_cuenta_bancaria}>
                            <td>${json.datos[item].numero_cuenta}</td>
                            <td>${json.datos[item].titular_cuenta}</td>
                            <td>${json.datos[item].nombre_tipo_cuenta_bancaria}</td>
                            <td>${json.datos[item].nombre_banco}</td>
                            <td>${json.datos[item].nombre_estado_cuenta_bancaria}</td>
                            <td>${json.datos[item].saldo}</td>
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
    let url = '/api/v1/cuentas_bancarias';
    let numero_cuenta = document.getElementById('numero_cuenta').value;
    let titular_cuenta = document.getElementById('titular_cuenta').value;
    let saldo = document.getElementById('saldo').value;
   
    var data = {
        numero_cuenta: numero_cuenta,
        titular_cuenta: titular_cuenta,
        saldo: saldo,
        id_tipo_cuenta_bancaria: id_tipo_cuenta_bancaria,
        id_banco: id_banco,
        id_estado_cuenta_bancaria: id_estado_cuenta_bancaria
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
    buscar_cuentas_bancarias();
    agregar_linea();
};

async function guardar_modificar() {
    let url = `/api/v1/cuentas_bancarias/${id_cuenta_bancaria}`;
    let numero_cuenta = document.getElementById('numero_cuenta').value;
    let titular_cuenta = document.getElementById('titular_cuenta').value;
    let saldo = document.getElementById('saldo').value;
    
    let data = {
        id_cuenta_bancaria: id_cuenta_bancaria,      
        numero_cuenta: numero_cuenta,
        titular_cuenta: titular_cuenta,
        saldo: saldo,
        id_tipo_cuenta_bancaria: id_tipo_cuenta_bancaria,
        id_banco: id_banco,
        id_estado_cuenta_bancaria: id_estado_cuenta_bancaria

    };
    console.log(data)
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
    buscar_cuentas_bancarias();
    agregar_linea();
};

async function guardar_eliminar() {
    let url = `/api/v1/cuentas_bancarias/${id_cuenta_bancaria_eliminar}`;
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
    buscar_cuentas_bancarias();
};

// TIpos cuentas bancarias
async function buscar_tipo_cuenta_bancaria() {
    let buscar = document.getElementById('tipo_cuenta_bancaria').value;
    let url = `/api/v1/tipos_cuentas_bancarias?buscar=${buscar}`;

    var parametros = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-elegir-tipo_cuenta_bancaria');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.datos) {
            let linea = `<tr data-id_tipo_cuenta_bancaria=${json.datos[item].id} onclick="elegir_tipo_cuenta_bancaria(this)">
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

function elegir_tipo_cuenta_bancaria(xthis) {
    id_tipo_cuenta_bancaria = parseInt(xthis.getAttribute('data-id_tipo_cuenta_bancaria'));
    const tds = xthis.children;
    const nombre = tds[0].innerText;
    document.getElementById('tipo_cuenta_bancaria').value = nombre;
    salir_buscador('modal-buscador-tipo_cuenta_bancaria');
}

// bancos
async function buscar_banco() {
    let buscar = document.getElementById('banco').value;
    let url = `/api/v1/bancos?buscar=${buscar}`;

    var parametros = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-elegir-banco');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.datos) {
            let linea = `<tr data-id_banco=${json.datos[item].id} onclick="elegir_banco(this)">
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

function elegir_banco(xthis) {
    id_banco = parseInt(xthis.getAttribute('data-id_banco'));
    const tds = xthis.children;
    const nombre = tds[0].innerText;
    document.getElementById('banco').value = nombre;
    salir_buscador('modal-buscador-banco');
}

// Estados cuentas bancarias
async function buscar_estado_cuenta_bancaria() {
    let buscar = document.getElementById('estado_cuenta_bancaria').value;
    let url = `/api/v1/estados_cuentas_bancarias?buscar=${buscar}`;

    var parametros = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-elegir-estado_cuenta_bancaria');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.datos) {
            let linea = `<tr data-id_estado_cuenta_bancaria=${json.datos[item].id} onclick="elegir_estado_cuenta_bancaria(this)">
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

function elegir_estado_cuenta_bancaria(xthis) {
    id_estado_cuenta_bancaria = parseInt(xthis.getAttribute('data-id_estado_cuenta_bancaria'));
    const tds = xthis.children;
    const nombre = tds[0].innerText;
    document.getElementById('estado_cuenta_bancaria').value = nombre;
    salir_buscador('modal-buscador-estado_cuenta_bancaria');
}


