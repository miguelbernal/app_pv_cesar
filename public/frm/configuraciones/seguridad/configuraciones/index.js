inicializar_formulario();

function inicializar_formulario() {
    siguiente_campo('#nombre', '#direccion', false);
    siguiente_campo('#direccion', '#telefono', false);
    siguiente_campo('#telefono', '#ruc', false);
    siguiente_campo('#ruc', '#moneda', false);
    siguiente_campo('#moneda', '#boton-guardar', true);
    id_configuracion = 1;
    buscar_configuracion();
}

// llamadas al servidor
async function buscar_configuracion() {
    let url = `/api/v1/configuraciones/${id_configuracion}`;
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
    if (json.status === 200) {
        document.getElementById("nombre").value = json.datos[0].nombre
        document.getElementById("direccion").value = json.datos[0].direccion
        document.getElementById("telefono").value = json.datos[0].telefono
        document.getElementById("ruc").value = json.datos[0].ruc
        document.getElementById("moneda").value = json.datos[0].nombre_moneda
        id_moneda = json.datos[0].id_moneda;
        focus('#nombre');
    }
}

function guardar() {
    if (validar_formulario()) {
        if (id_configuracion === 1) {
            guardar_modificar()
        }
    }
};

function validar_formulario() {   
    let ok = true
    const nombre = document.getElementById('nombre')
    const direccion = document.getElementById('direccion')
    const telefono = document.getElementById('telefono')
    const ruc = document.getElementById('ruc')
    limpiar_mensaje_formulario()
    if (nombre.value.trim() === '') {
        mensaje_formulario('#nombre','Nombre vacio.')
        ok = false
    } else if (direccion.value.trim() === '') {
        mensaje_formulario('#direccion','Simbolo vacio.')
        ok = false
    } else if (telefono.value.trim() === '') {
        mensaje_formulario('#telefono','Compra vacio.')
        ok = false
    } else if (ruc.value.trim() === '') {
        mensaje_formulario('#ruc','Venta vacio.')
        ok = false
    }
    return ok
};

async function guardar_modificar() {
    let url = `/api/v1/configuraciones/${id_configuracion}`;
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let ruc = document.getElementById('ruc').value;
    let data = {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        ruc: ruc,
        id_moneda: id_moneda
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
};

// Buscar monedas
async function buscar_moneda() {
    let buscar = document.getElementById('moneda').value;
    let url = `/api/v1/monedas?buscar=${buscar}`;

    var paramentros = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
             'Content-Type': 'application/json'
        },
    };

    var datos = await fetch(url, paramentros)
    const json = await datos.json();
    const tbody = document.getElementById('tbody-datos-elegir-moneda');
    tbody.innerText = '';
    let lineas = '';
    if(json.status === 200) {
        for(let item in json.datos) {
            let linea = `<tr data-id_moneda=${json.datos[item].id} onclick="elegir_moneda(this)">
                        <td>${json.datos[item].nombre}</td>
            </tr>`;
            lineas += linea;
        }
    }
    if(lineas === '') {
        lineas = `<tr><td class="text-center">No existen registros ...</td></tr>`;
    }
    tbody.innerHTML = lineas;
}
 
function elegir_moneda(xthis){
    id_moneda = parseInt(xthis.getAttribute('data-id_moneda'));
    const tds = xthis.children;
    const nombre = tds[0].innerText;
    document.getElementById('moneda').value = nombre;
    salir_buscador('modal-buscador-moneda');
}

