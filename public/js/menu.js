let id_usuario = 0;
let id_rol = 0;
let id_formulario = 0;
let id_submenu = 0;
document.getElementById('menu-boton').addEventListener('click', function(){
    const elemento = document.getElementsByClassName('menu-admin')[0];
    const panel_main = document.getElementsByClassName('panel-main')[0];
    if(elemento.classList.contains('menu-oculto')){
        elemento.classList.remove('menu-oculto');
        panel_main.classList.remove('panel-main-oculto');
    }else{
        elemento.className += ' menu-oculto';
        panel_main.className += ' panel-main-oculto';
    }
});