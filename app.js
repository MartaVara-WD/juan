$(document).ready(function () {




    console.log("ready!");
});

//--Selectores
const portada = document.querySelector("#bloque-portada");
const menu = document.querySelector("#bloque-menu");
const bloqueContacto = document.querySelector("#bloque-contacto");
const bloqueArt = document.querySelector("#bloque-art");
const btnMenuAbrir = document.querySelectorAll(".boton-polilla");
const btnMenuCerrar = document.querySelector("#btn-cerrar-menu");
const btnBloqueContacto = document.querySelector("#btn-contacto");
const btnBloqueArt = document.querySelector("#btn-art");
const btnBloqueShop = document.querySelector("#btn-shop");
const btnBloqueInstagram = document.querySelector("#btn-instagram");
const btnsTodos = document.querySelectorAll(".botones-portada");




//--Boton portada
portada.addEventListener('click', function () {
    console.log("cerrar portada");

    portada.classList.add("oculto");
});

//--Boton polilla ir a menu
for (var i = 0; i < btnMenuAbrir.length; i++) {

    btnMenuAbrir[i].addEventListener('click', function () {
        console.log("btn abrir");

        menu.classList.remove("oculto");
    });

}

//--Boton menu cerrar
btnMenuCerrar.addEventListener('click', function () {
    console.log("btn cerrar");
    menu.classList.add("oculto");
});
//-- Funcion quitar color a todos los botones
function borrarColorBotones() {
    for (var i = 0; i < btnsTodos.length; i++) {
        btnsTodos[i].style.color = "#070707"
    }

}

//--Boton bloque contacto
btnBloqueContacto.addEventListener('click', function () {
    console.log("contacto");
    borrarColorBotones()
    btnBloqueContacto.style.color = "#b33232"
    bloqueContacto.classList.remove("oculto");
    menu.classList.add("oculto");
    bloqueArt.classList.add("oculto");
});

//--Boton bloque art
btnBloqueArt.addEventListener('click', function () {
    console.log("art");
    borrarColorBotones()
    btnBloqueArt.style.color = "#b33232"
    bloqueArt.classList.remove("oculto");
    menu.classList.add("oculto");
    bloqueContacto.classList.add("oculto");

});

//--Boton bloque shop
btnBloqueShop.addEventListener('click', function () {
    console.log("shop");
    borrarColorBotones()
    btnBloqueShop.style.color = "#b33232"
});

//--Boton bloque instagram
btnBloqueInstagram.addEventListener('click', function () {
    console.log("btnBloqueInstagram");
    borrarColorBotones()
    btnBloqueInstagram.style.color = "#b33232"
});




//--cuando inicia el codigo 
//-- --art aparece en rojo
btnBloqueArt.style.color = "#b33232"


