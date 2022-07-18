mostrar_nombre_programa("Formas de cobros");

inicializar_formulario();

function inicializar_formulario() {
    focus('#nombre')
    siguiente_campo('#nombre', '#boton-guardar', true)
    buscar_formas_cobros()
    id_forma_cobro= 0
}

function editar_linea(xthis){
    id_forma_cobro = xthis.parentElement.parentElement.getAttribute('data-id_forma_cobro')
    const tds = xthis.parentElement.parentElement.children
    const nombre = tds[0].innerText
    document.getElementById('nombre').value = nombre
    focus('#nombre')
    document.getElementById('boton-guardar').innerHTML = '<i class="bi bi-pencil"></i> Modificar'
}

function agregar_linea(){
    id_forma_cobro = 0;
    document.getElementById('nombre').value = ''
    focus('#nombre')
    document.getElementById('boton-guardar').innerHTML = '<i class="bi bi-plus-lg"></i> Agregar'
}

function eliminar_linea(xthis){
    id_forma_cobro_eliminar = xthis.parentElement.parentElement.getAttribute('data-id_forma_cobro')
    mensaje_confirmar("Estas seguro de eliminar este registro?", "Eliminar", "guardar_eliminar()")
}

function guardar() {
    if(validar_formulario()) {
        if(id_forma_cobro === 0){
            guardar_agregar();
        } else {
            guardar_modificar();
        }
    }
}

function validar_formulario() {
    let ok = true
    const nombre = document.getElementById('nombre')
    if (nombre.value.trim() === '') {
        mensaje_formulario('#nombre','Nombre vacio.')
        ok = false
    }
    return ok;
}

//Llamar al servidor
async function buscar_formas_cobros() {
    let buscar = document.getElementById('buscar').value;
    let url = `/api/v1/formas_cobros?buscar=${buscar}`;
    var paramentros = {
        method:"GET",
        headers: {
            'Accept': 'application/json',
             'Content-Type': 'application/json'
        }
    };
    var datos = await fetch(url, paramentros)
    const json = await datos.json();
    console.log(json)
    const tbody = document.getElementById('tbody-datos-formas_cobros');
    tbody.innerText = '';
    let lineas = '';
    if(json.status === 200) {
        for(let item in json.datos) {
            let linea = `<tr data-id_forma_cobro=${json.datos[item].id}>
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
    if(lineas === '') {
        lineas = `<tr><td colspan="2" class="text-center">No existen registros ...</td></tr>`;
    }
    tbody.innerHTML = lineas;
}

async function guardar_agregar(){
    let url = '/api/v1/formas_cobros';
    let nombre = document.getElementById('nombre').value;
   
    var data = {
        nombre: nombre,
    };

    var paramentros = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    var datos = await fetch(url, paramentros)
    const json = await datos.json();
    //console.log(json);
    buscar_formas_cobros();
    agregar_linea();
}

async function guardar_modificar(){
    let url = `api/v1/formas_cobros/${id_forma_cobro}`;
    let nombre = document. getElementById('nombre').value;

    var data = {
        nombre: nombre
    };

    var paramentros = {
        method:'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    var datos = await fetch(url, paramentros)
    const json = await datos.json();
  //  console.log(json);
    buscar_formas_cobros();
    agregar_linea();
}

async function guardar_eliminar(){
    let url = `api/v1/formas_cobros/${id_forma_cobro_eliminar}`;

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
   // console.log(json);
    buscar_formas_cobros();
}
