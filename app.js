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

//--Boton bloque contacto
btnBloqueContacto.addEventListener('click', function () {
    console.log("contacto");
    bloqueContacto.classList.remove("oculto");
    menu.classList.add("oculto");
    bloqueArt.classList.add("oculto");
});

//--Boton bloque art
btnBloqueArt.addEventListener('click', function () {
    console.log("art");
    bloqueArt.classList.remove("oculto");
    menu.classList.add("oculto");
    bloqueContacto.classList.add("oculto");
});


