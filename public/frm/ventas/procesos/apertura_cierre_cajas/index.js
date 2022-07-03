mostrar_nombre_programa("Apertura y Cierre de Cajas");

inicializar_formulario()
id_usuario = localStorage.getItem('id_usuario')
usuario = localStorage.getItem('usuario_usuario')
document.getElementById('usuario').value = usuario
id_apertura_cierre_caja = 0
cerrado = 1

function inicializar_formulario(){
    buscar_apertura_cierre_cajas()
}

async function buscar_apertura_cierre_cajas() {
    let url = `/api/v1/apertura_cierre_cajas/usuario/${id_usuario}`;

    var parametros = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    var datos = await fetch(url, parametros)
    const json = await datos.json();
    console.log(json)
    if(json.datos.length > 0){
        document.getElementById('boton-abrir').setAttribute('disabled','')
        document.getElementById('boton-cerrar').removeAttribute('disabled')
        id_apertura_cierre_caja = json.datos[0].id
        cerrado = 1
        document.getElementById('apertura').value = json.datos[0].apertura.replace('T',' ').replace('.000Z','')
        document.getElementById('cierre').value = get_hoy()
        focus('#boton-cerrar')
    } else {
        document.getElementById('boton-abrir').removeAttribute('disabled')
        document.getElementById('boton-cerrar').setAttribute('disabled','')
        id_apertura_cierre_caja = 0
        cerrado = 0
        document.getElementById('apertura').value = get_hoy()
        document.getElementById('cierre').value = ''
        focus('#boton-abrir')
    }
}

async function abrir() {
    const url = '/api/v1/apertura_cierre_cajas';
    const apertura = document.getElementById('apertura').value;
    let data = {
        apertura: apertura,
        cerrado: cerrado,
        usuario_id: id_usuario
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
    console.log(json);
    salir_formulario();
};

async function cerrar() {
    const url = `/api/v1/apertura_cierre_cajas/${id_apertura_cierre_caja}`;
    const apertura = document.getElementById('apertura').value;
    const cierre = document.getElementById('cierre').value;
    let data = {
        apertura: apertura,
        cierre: cierre,
        cerrado: cerrado
    };
    var parametros = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    var datos = await fetch(url, parametros);
    const json = await datos.json();
    console.log(json);
    salir_formulario();
};
