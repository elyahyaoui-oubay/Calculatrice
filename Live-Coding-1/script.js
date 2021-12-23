// Variables
var num1ChaineCa;
var num1;
var operation;
var num2ChaineCa;
var num2;

function onClickNombre(nombre){
    if(num1ChaineCa == undefined){
        num1ChaineCa = nombre;
    }else{
        num2ChaineCa = nombre;
    }
    afficher();
}

function afficher(nombre){
    var afficher = document.getElementById("afficher");
        afficher.value = '';

    if(num1ChaineCa != undefined){
        afficher.value += num1ChaineCa;
    }
    if(operation != undefined){
        afficher.value += operation;
    }
    if(num2ChaineCa != undefined){
        afficher.value += num2ChaineCa;
    }
}

function Operation(operationPara){
    if(operation == undefined){
        operation = operationPara;
        num1 = parseFloat(num1ChaineCa);
    }
    afficher();
}