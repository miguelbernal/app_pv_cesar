inicializar_formulario();

function inicializar_formulario() {
    focus('#nombre');
    siguiente_campo('#nombre', '#simbolo', false);
    siguiente_campo('#simbolo', '#compra', false);
    siguiente_campo('#compra', '#venta', false);
    siguiente_campo('#venta', '#boton-guardar', true);
    buscar_clientes();
    id_moneda = 0;
}

// llamadas al servidor
async function buscar_monedas() {
    let buscar = document.getElementById('buscar').value;
    let url = `/api/v1/monedas?buscar=${buscar}`;
    var parametros = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-monedas');
    tbody.innerText = '';
    let lineas = '';
    if (json.status === 200) {
        for (let item in json.datos) {
            let linea = `<tr datos-id_moneda=${json.datos[item].id}>
                            <td>${json.datos[item].nombre}</td>
                            <td>${json.datos[item].simbolo}</td>
                            <td>${json.datos[item].compra}</td>
                            <td>${json.datos[item].venta}</td>
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
    id_moneda = xthis.parentElement.parentElement.getAttribute('datos-id_moneda')
    const tds = xthis.parentElement.parentElement.children
    const nombre = tds[0].innerText
    const simbolo = tds[1].innerText
    const compra = tds[2].innerText
    const venta = tds[3].innerText
    document.getElementById('nombre').value = nombre
    document.getElementById('simbolo').value = simbolo
    document.getElementById('compra').value = compra
    document.getElementById('venta').value = venta
    focus('#nombre')
    document.getElementById('boton-guardar').innerHTML = '<i class="bi bi-pencil-fill"></i>  Modificar'
}

function agregar_linea() {
    id_moneda = 0
    document.getElementById('nombre').value = ''
    document.getElementById('simbolo').value = ''
    document.getElementById('compra').value = ''
    document.getElementById('venta').value = ''
    focus('#nombre')
    document.getElementById('boton-guardar').innerHTML = '<i class="bi bi-plus-lg"></i>  Agregar'
}

function eliminar_linea(xthis) {
    id_moneda_eliminar = xthis.parentElement.parentElement.getAttribute('datos-id_moneda')
    mensaje_confirmar('Seguro que quiere eliminar este registro?', 'Eliminar', 'guardar_eliminar()')
}

function guardar() {
    if (validar_formulario()) {
        if (id_moneda === 0) {
            guardar_agregar()
        } else {
            guardar_modificar()
        }
    }
};

function validar_formulario() {
    let ok = true
    const nombre = document.getElementById('nombre')
    const simbolo = document.getElementById('simbolo')
    const compra = document.getElementById('compra')
    const venta = document.getElementById('venta')
    limpiar_mensaje_formulario()
    if (nombre.value.trim() === '') {
        mensaje_formulario('#nombre','Nombre vacio.')
        ok = false
    } else if (simbolo.value.trim() === '') {
        mensaje_formulario('#simbolo','Simbolo vacio.')
        ok = false
    } else if (compra.value.trim() === '') {
        mensaje_formulario('#compra','Compra vacio.')
        ok = false
    } else if (venta.value.trim() === '') {
        mensaje_formulario('#venta','Venta vacio.')
        ok = false
    }
    return ok
};

async function guardar_agregar() {
    let url = '/api/v1/monedas';
    let nombre = document.getElementById('nombre').value;
    let simbolo = document.getElementById('simbolo').value;
    let compra = document.getElementById('compra').value;
    let venta = document.getElementById('venta').value;
    let data = {
        nombre: nombre,
        simbolo: simbolo,
        compra: compra,
        venta: venta
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
    buscar_monedas();
    agregar_linea();
};

async function guardar_modificar() {
    let url = `/api/v1/monedas/${id_moneda}`;
    let nombre = document.getElementById('nombre').value;
    let simbolo = document.getElementById('simbolo').value;
    let compra = document.getElementById('compra').value;
    let venta = document.getElementById('venta').value;
    let data = {
        nombre: nombre,
        simbolo: simbolo,
        compra: compra,
        venta: venta
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
    buscar_monedas();
    agregar_linea();
};

async function guardar_eliminar() {
    let url = `/api/v1/monedas/${id_moneda_eliminar}`;
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
    buscar_monedas();
};