// Variables
var num1ChaineCa;
var num1;
var operation;
var num2ChaineCa;
var num2;
var total;


function onClickNombre(nombre){
    if(num1 == undefined){
        if(num1ChaineCa == undefined) num1ChaineCa = '';
        num1ChaineCa += nombre;
    } 
    else {
        if(num2ChaineCa == undefined) num2ChaineCa = '';
        num2ChaineCa += nombre;
    } 

    afficher();
}

function afficher(nombre){
    var afficher = document.getElementById("afficher");
        afficher.value = '';
    if(num1 != undefined && num2 != undefined && operation != undefined){
        afficher.value = nombre;
    }else{
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
    
}

function Operation(operationPara){
    if(operation == undefined){
        operation = operationPara;
        num1 = parseFloat(num1ChaineCa);
    }
    afficher();
}

function Egale(){
    num1 = parseFloat(num1ChaineCa);
    num2 = parseFloat(num2ChaineCa);
    total = somme(num1, num2, operation);

    afficher(total);
}

function somme(num1, num2, operation){
    let total = undefined;

    switch(operation){
        case "+":
            total = num1 + num2;
        break;
        case "-":
            total = num1 - num2;
        break;
    }
    return total;
}