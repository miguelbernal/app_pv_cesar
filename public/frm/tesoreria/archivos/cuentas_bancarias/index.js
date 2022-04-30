inicializador_formulario();

function inicializador_formulario() {
    focus('#numero');
    siguiente_campo('#numero', '#titular_cuenta', false);
    siguiente_campo('#titular_cuenta', '#tipoCuentaBancaria', false);
    siguiente_campo('#tipoCuentaBancaria', '#banco', false);
    siguiente_campo('#banco', '#estadoCuentaBancaria', false);
    siguiente_campo('#estadoCuentaBancaria', '#saldo', false);
    siguiente_campo('#saldo', '#boton-guardar', true);
    buscar_cuentasBancarias();
    id_cuentaBancaria = 0
}

function editar_linea(xthis) {
    id_cuentaBancaria = xthis.parentElement.parentElement.getAttribute('data-id_cuentaBancaria')
    id_tipoCuentaBancaria = xthis.parentElement.parentElement.getAttribute('data-id_tipoCuentaBancaria')
    id_banco = xthis.parentElement.parentElement.getAttribute('data-id_banco')
    id_estadoCuentaBancaria = xthis.parentElement.parentElement.getAttribute('data-id_estadoCuentaBancaria')
    const tds = xthis.parentElement.parentElement.children
    const numero = tds[0].innerText
    const titular_cuenta = tds[1].innerText
    const tipoCuentaBancaria = tds[2].innerText
    const banco = tds[3].innerText
    const estadoCuentaBancaria = tds[4].innerText
    const saldo = tds[5].innerText 
    document.getElementById('numero').value = numero
    document.getElementById('titular_cuenta').value = titular_cuenta
    document.getElementById('tipoCuentaBancaria').value = tipoCuentaBancaria
    document.getElementById('banco').value = banco
    document.getElementById('estadoCuentaBancaria').value = estadoCuentaBancaria
    document.getElementById('saldo').value = saldo
    focus('#numero')
    document.getElementById('boton-guardar').innerHTML = '<i class="fas fa-pencil-alt"></i> Modificar'
}

function agregar_linea() {
   // modificado = false
    id_cuentaBancaria = 0
    id_tipoCuentaBancaria = 0
    id_banco = 0
    id_estadoCuentaBancaria = 0
    document.getElementById('numero').value = ''
    document.getElementById('titular_cuenta').value = ''
    document.getElementById('tipoCuentaBancaria').value = ''
    document.getElementById('banco').value = ''
    document.getElementById('estadoCuentaBancaria').value = ''
    document.getElementById('saldo').value = ''
    focus('#numero')
    document.getElementById('boton-guardar').innerHTML = '<i class="fas fa-plus"></i> Agregar'
}

function eliminar_linea(xthis) {
    id_cuentaBancaria_eliminar = xthis.parentElement.parentElement.getAttribute('data-id_cuentaBancaria')
    mensaje_confirmar('Seguro que quiere eliminar este registro?', 'Eliminar', 'guardar_eliminar()')
}

function guardar() {
    if (validar_formulario()) {
        if (id_cuentaBancaria === 0) {
            guardar_agregar()
        } else {
            guardar_modificar()
        }
    }
}

function validar_formulario() {
    let ok = true
    const numero = document.getElementById('numero')
    const titular_cuenta = document.getElementById('titular_cuenta')
    if (numero.value.trim() === '') {
        mensaje_formulario('#numero', 'Numero vacio.')
        ok = false
    } else if (titular_cuenta.value.trim() === '') {
       mensaje_formulario('#titular_cuenta', 'Titular de cuenta vacio.')
        ok = false
    }
    return ok
}

// llamadas al servidor
async function buscar_cuentasBancarias() {
    let buscar = document.getElementById('buscar').value;
    let url = `/api/v1/cuentasBancarias?buscar=${buscar}`;
    var parametros = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-cuentas_bancarias');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.datos) {
            let linea = `<tr data-id_cuentaBancaria=${json.datos[item].id} data-id_tipoCuentaBancaria=${json.datos[item].id_tipoCuentaBancaria}
            data-id_banco=${json.datos[item].id_banco}data-id_estadoCuentaBancaria=${json.datos[item].id_estadoCuentaBancaria}>
                            <td>${json.datos[item].numero}</td>
                            <td>${json.datos[item].titular_cuenta}</td>
                            <td>${json.datos[item].nombre_tipoCuentaBancaria}</td>
                            <td>${json.datos[item].nombre_banco}</td>
                            <td>${json.datos[item].nombre_estadoCuentaBancaria}</td>
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
    let url = '/api/v1/cuentasBancarias';
    let numero = document.getElementById('numero').value;
    let titular_cuenta = document.getElementById('titular_cuenta').value;
    let saldo = document.getElementById('saldo').value;
   
    var data = {
        numero: numero,
        titular_cuenta: titular_cuenta,
        saldo: saldo,
        id_tipoCuentaBancaria: id_tipoCuentaBancaria,
        id_banco: id_banco,
        id_estadoCuentaBancaria: id_estadoCuentaBancaria
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
    buscar_cuentasBancarias();
    agregar_linea();
};

async function guardar_modificar() {
    let url = `/api/v1/cuentasBancarias/${id_cuentaBancaria}`;
    let numero = document.getElementById('numero').value;
    let titular_cuenta = document.getElementById('titular_cuenta').value;
    let saldo = document.getElementById('saldo').value;
    
    let data = {
        id_cuentaBancaria: id_cuentaBancaria,      
        numero: numero,
        titular_cuenta: titular_cuenta,
        saldo: saldo,
        id_tipoCuentaBancaria: id_tipoCuentaBancaria,
        id_banco: id_banco,
        id_estadoCuentaBancaria: id_estadoCuentaBancaria

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
    buscar_cuentasBancarias();
    agregar_linea();
};

async function guardar_eliminar() {
    let url = `/api/v1/cuentasBancaria/${id_cuentaBancaria_eliminar}`;
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
    buscar_cuentasBancarias();
};

// TIpos cuentas bancarias
async function buscar_tipoCuentaBancaria() {
    let buscar = document.getElementById('tipoCuentaBancaria').value;
    let url = `/api/v1/tiposCuentasBancarias?buscar=${buscar}`;

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
            let linea = `<tr data-id_tipoCuentaBancaria=${json.datos[item].id} onclick="elegir_tipoCuentaBancaria(this)">
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

function elegir_tipoCuentaBancaria(xthis) {
    id_tipoCuentaBancaria = parseInt(xthis.getAttribute('data-id_tipoCuentaBancaria'));
    const tds = xthis.children;
    const nombre = tds[0].innerText;
    document.getElementById('tipoCuentaBancaria').value = nombre;
    salir_buscador('modal-buscador-tipoCuentaBancaria');
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
async function buscar_estadoCuentaBancaria() {
    let buscar = document.getElementById('estadoCuentaBancaria').value;
    let url = `/api/v1/estadosCuentasBancarias?buscar=${buscar}`;

    var parametros = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-elegir-estadoCuentaBancaria');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.datos) {
            let linea = `<tr data-id_estadoCuentaBancaria=${json.datos[item].id} onclick="elegir_estadoCuentaBancaria(this)">
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

function elegir_estadoCuentaCancaria(xthis) {
    id_estadoCuentaBancaria = parseInt(xthis.getAttribute('data-id_estadoCuentaBancaria'));
    const tds = xthis.children;
    const nombre = tds[0].innerText;
    document.getElementById('estadoCuentaBancaria').value = nombre;
    salir_buscador('modal-buscador-estadoCuentaBancaria');
}


