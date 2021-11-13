function focus(campo){
    const elemento = document.querySelector(campo)
    if (elemento.getAttribute('type') === 'button') {
        elemento.focus()
    } else {
        elemento.select()
    }
}

function siguiente_campo(actual, siguiente, preventDefault){
    document.querySelector(actual).addEventListener('keydown', (event) => {
        const siguienteCampo = document.querySelector(siguiente)
        if (event.which === 13) {
            if (preventDefault) {
                event.preventDefault()
            }
            if (siguienteCampo.getAttribute('type') === 'button') {
                siguienteCampo.focus()
            } else {
                siguienteCampo.select()
            }
        }
    })
}

function mensaje(texto, funcion){
    const modal = `
    <div class="modal" id="myModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Mensaje del sistema</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>${texto}</p>
            </div>
            <div class="modal-footer">
                <button id="mensaje-aceptar" type="button" class="btn btn-danger" data-bs-dismiss="modal">Aceptar</button>
            </div>
            </div>
        </div>
    </div>`
    document.getElementById('mensaje').innerHTML = modal
    const options = {}
    const myModal = new bootstrap.Modal(document.getElementById("myModal"), options)
    myModal.show()
    const mensaje_aceptar = document.querySelector('#mensaje-aceptar')
    mensaje_aceptar.focus()
    mensaje_aceptar.addEventListener('click',function(){
        eval(funcion)
        document.querySelector('#mensaje').innerHTML = ''
    })
}

function mensaje_confirmar(texto, texto_boton, funcion) {
    const modal = `
    <div id="myModal" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Mensaje del Sistema</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>${texto}</p>
                </div>
                <div class="modal-footer">
                    <button id="mensaje-eliminar" type="button" class="btn btn-danger" data-bs-dismiss="modal">${texto_boton}</button>
                    <button id="mensaje-cancelar" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    `
    document.querySelector("#mensaje").innerHTML = modal;
    let options = {

    };
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
    myModal.show();
    const mensaje_eliminar = document.querySelector("#mensaje-eliminar");
    const mensaje_cancelar = document.querySelector("#mensaje-cancelar");
    mensaje_cancelar.focus();
    mensaje_eliminar.addEventListener('click', function () {
        eval(funcion);
        document.querySelector("#mensaje").innerHTML = '';
    });
}

async function cargar_formulario(div, url, funcion) {
    const response = await fetch(url);
    const div_link = "#" + div + " link";
    const div_script = "#" + div + " script";
    if (response.status === 200) {
        const cuerpo = await response.text();
        document.getElementById(div).innerHTML = cuerpo;
        document.querySelectorAll(div_link).forEach(link => {
            document.getElementById(div).removeChild(link);
            var linkElement = document.createElement("link");
            for (attribute of link.attributes) {
                linkElement.setAttribute(attribute.name, attribute.value);
            }
            linkElement.text = link.innerHTML;
            document.getElementById(div).append(linkElement);
        });
        document.querySelectorAll(div_script).forEach(script => {
            document.getElementById(div).removeChild(script);
            var scriptElement = document.createElement("script");
            for (attribute of script.attributes) {
                scriptElement.setAttribute(attribute.name, attribute.value);
            }
            document.getElementById(div).append(scriptElement);
            eval(script.innerText);
        });
        eval(funcion);
    }
}

function buscar_lista(campo, id, funcion_elegir, funcion_buscar, panel_activo) {
    let elemento = document.getElementById(campo);
    let modal_buscador = document.getElementById(id);
    let menu_admin = document.getElementById('menu-admin');
    let menu_oculto = menu_admin.classList.contains('menu-oculto');
    sumar = menu_oculto ? 0 : 300;

    if (modal_buscador !== null) modal_buscador.remove();
    let coords = elemento.getBoundingClientRect();
    modal_buscador = document.createElement('div');
    let left = coords.left - sumar;

    modal_buscador.setAttribute('style', `
        width: ${coords.width}px;
        position: absolute;
        top: ${coords.top - 15}px;
        left: ${left}px;
        z-index: 1000;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    `);
    modal_buscador.id = id;
    modal_buscador.innerHTML = `
    <div class="table-resposive">
        <table class="table table-striped table-hover table-bordered">
            <tbody id="tbody-datos-elegir-${campo}" style="cursor: pointer">
                
            </tbody>
        </table>
        <div class="btn-group d-flex mb-2" role="group" aria-label="Basic example">
            <button class="btn btn-outline-danger btn-sm" onclick='salir_buscador("${id}")'><i class="fas fa-sign-out-alt"></i> Salir</button>
        </div>
    </div>
    `;
    let panel = document.getElementById(panel_activo);
    panel.append(modal_buscador);
    eval(funcion_buscar);
}

function salir_buscador(id) {
    let modal_buscador = document.getElementById(id);
    modal_buscador.remove();
}