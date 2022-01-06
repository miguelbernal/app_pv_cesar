const usuario = document.getElementById('usuario')
const clave = document.getElementById('clave')
const boton_ingresar = document.getElementById('boton-ingresar')
const boton_salir = document.getElementById('boton-salir')

inicializar_formulario()

function inicializar_formulario(){
    focus('#usuario')
    siguiente_campo('#usuario','#clave',false)
    siguiente_campo('#clave','#boton-ingresar',false)
}

boton_ingresar.addEventListener('click', () => {
    if(validar_formulario()){
        validar_servidor()
    }
})

function validar_formulario(){
    let ok = true
    if(usuario.value.trim() === ''){
        mensaje('Usuario vacio','focus("#usuario")')
        ok = false
    } else if(clave.value.trim() === ''){
        mensaje('Contraseña vacia','focus("#clave")')
        ok = false
    }
    return ok
}

async function validar_servidor(){
    const url = 'api/v1/usuarios/login'
    
    const data = {
        usuario: usuario.value,
        clave: clave.value
    }

    const parametros = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    }

    const datos = await fetch(url, parametros)
    const json = await datos.json()
    console.log(json)
    if (json.status === 200) {
        location.href = 'menu'
    } else {
        mensaje('Credencial incorrecta.','focus("#usuario")')
    }
}

boton_salir.addEventListener('click', () => {
    location.href = '/'
})