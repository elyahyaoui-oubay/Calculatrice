// declaration des variables
var num1ChaineCa;
var num2ChaineCa;
var operation;

var num1;
var num2;



function clickNombre(nombre){
    if(num1ChaineCa == undefined){
        num1ChaineCa = nombre;
    }else{
        if(num2ChaineCa == undefined){
            num2ChaineCa = nombre;
        }
    }
    

    afficher();
}

function afficher(nombre){
    var afficher = document.getElementById("afficher")
        afficher.value = '';

        if (num1 != undefined && num2 != undefined && operation != undefined ){
            }else{
                if(num1ChaineCa != undefined ){
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
    if (operation == undefined){
        operation = operationPara;
        num1 = parseFloat(num1ChaineCa);
    }

    afficher();
}

function Egale(){
    a = parseFloat(num1ChaineCa);
    b = parseFloat(num2ChaineCa);

    total = somme(num1, num2, operation);

    afficher(total);
}

function somme(num1, num2, operation){

    var _total = undefined;

    switch(operation){
        case "+":
            _total = num1 + num2;
        break;

        case "-":
            _total = num1 - num2;
        break;
    }
}


