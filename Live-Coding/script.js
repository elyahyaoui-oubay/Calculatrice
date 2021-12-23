// Variables
var num1ChaineCa;
var num1;

function onClickNombre(nombre){
    if(num1ChaineCa == undefined){
        num1ChaineCa = nombre;
    }
    afficher();
}

function afficher(nombre){
    var afficher = document.getElementById("afficher");
        afficher.value = '';

    if(num1ChaineCa != undefined){
        afficher.value += num1ChaineCa;
    }
}