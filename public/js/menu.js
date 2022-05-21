let id_usuario = 0;
let id_rol = 0;
let id_formulario = 0;
let id_submenu = 0;
let id_cuenta_bancaria = 0;
let id_tipo_cuenta_bancaria = 0;
let id_concepto_movimiento_bancario = 0;
let id_estado_cuenta_bancaria = 0
let id_moneda = 0;
let id_modulo = 0;
let id_configuracion = 0;

buscar_permisos();

document.getElementById('menu-boton').addEventListener('click', function () {
    const elemento = document.getElementsByClassName('menu-admin')[0];
    const panel_main = document.getElementsByClassName('panel-main')[0];
    if (elemento.classList.contains('menu-oculto')) {
        elemento.classList.remove('menu-oculto');
        panel_main.classList.remove('panel-main-oculto');
    } else {
        elemento.className += ' menu-oculto';
        panel_main.className += ' panel-main-oculto';
    }
});

// Llamadas al Servidor
async function buscar_permisos() {
    let url = 'api/v1/permisos/buscar/rol';

    var parametros = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }
    };

    var datos = await fetch(url, parametros)
    const json = await datos.json();
    const permisos = json.data
    console.log(json)
    generar_menu(permisos)
    abrir_opciones_menu()
}

function generar_menu(permisos) {
    var nav = "";
    var modulo_anterior = 0;
    var submenu_anterior = 0;
    permisos.forEach(permiso => {
        if (modulo_anterior === 0) {
            nav += `<li><span class="caret caret-down">${permiso.nombre_modulo}</span>
                  <ul class="nested active">`
        } else if (modulo_anterior !== permiso.id_modulo) {
            nav += `</ul>
                  </li>
                    </ul>
                      </li>
                        <li><span class="caret caret-down">${permiso.nombre_modulo}</span>
                          <ul class="nested active">`
        } 

        if (submenu_anterior !== permiso.id_submenu || modulo_anterior !== permiso.id_modulo) {
            if (submenu_anterior !== permiso.id_submenu && modulo_anterior === permiso.id_modulo && modulo_anterior !== 0) {
                nav += `</li></ul>`
            }
            nav += `<li><span class="caret caret-down">${permiso.nombre_submenu}</span>
                  <ul class="nested active">`
        }
        nav += `<li class="form" onclick="cargar_formulario('panel-lista','${permiso.url}','ocultar_busqueda()')">${permiso.nombre_formulario}</li>`
        modulo_anterior = permiso.id_modulo
        submenu_anterior = permiso.id_submenu
        console.log(modulo_anterior, submenu_anterior)
    });
    if (nav !== "") {
        nav += `</ul>
              </li>
            </ul>
          </li>`
    } else {
        nav += `<h5 class="text-center" style="background-color:red; color: white; padding: 10px; border-radius: 10px; margin-left: -30px">No tiene permisos</h5>`
    }
    document.getElementById("nav_generado").innerHTML = nav;
}

function abrir_opciones_menu() {
    const toggler = document.getElementsByClassName("caret");

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }
}
