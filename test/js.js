// Variables
var num1ChaineCa;
var num2ChaineCa;
var operation;

var num1;
var num2;

var somme;

function clickNombre(nombre){
    if(num1ChaineCa == undefined){
        num1ChaineCa = nombre;
    }
    else{
        num2ChaineCa = nombre;
    }

    afficher();
}

function afficher(nombre){
    var afficher = document.getElementById("afficher");
    afficher.value = '';
    if(num1 != undefined && num2 != undefined && operation != undefined){
        afficher.value = nombre;
    }else{
    if(num1ChaineCa != undefined) {
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
function OnClickOperation(operationPara){
    if(operation == undefined){
        operation = operationPara;
        num1 = parseFloat(num1ChaineCa);
    }
        

        afficher();
}

function Egale(){
    num1 = parseFloat(num1ChaineCa);
    num2 = parseFloat(num2ChaineCa);

    somme = calculer(num1, num2, operation)

afficher(somme);
}

function calculer(num1, num2, operationPara){
    var _somme = undefined;

    switch(operationPara){
        case "+":
            _somme = num1 + num2;
            break;
        case "-":
            _somme = num1 - num2;
            break;
    }

    return _somme;
}



