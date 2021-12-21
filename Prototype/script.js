// Variables
let num1,num2,operation,solution;
let num1ChaineCa, num2ChaineCa;



// Métier
function Calculer(num1,num2,operation){
    let _solution = undefined;
    switch (operation) {
        case '+':
            _solution = num1 + num2;
            break;
        case '-':
            _solution = num1-num2;
            break;
    }
    return _solution;
}


// Présentation
function ClickNumber(number){
    if(num1 == undefined){
        if(num1ChaineCa == undefined) num1ChaineCa = '';
        num1ChaineCa += number;
    } 
    else {
        if(num2ChaineCa == undefined) num2ChaineCa = '';
        num2ChaineCa += number;
    } 

    Afficher();
}

function Afficher(number){

    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
    
    if(num1 != undefined && num2 != undefined && operation != undefined){

        afficheur.value = number;
    }else{
        if(num1ChaineCa != undefined)
        afficheur.value += num1ChaineCa 
        if(operation != undefined)
            afficheur.value += operation     
        if(num2ChaineCa != undefined)
            afficheur.value += num2ChaineCa 

        }
}

function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        num1 = parseFloat(num1ChaineCa);
        Afficher();
    }
}

function Egale(){
    num1 = parseFloat(num1ChaineCa);
    num2 = parseFloat(num2ChaineCa);
    solution = Calculer(num1,num2,operation);
    Afficher(solution);
}

function Init(){
    num1 = undefined;
    num2 = undefined;
    num1ChaineCa = undefined;
    num2ChaineCa = undefined;
    operation = undefined;
    let afficheur = document.getElementById("afficheur");
    
    afficheur.value = "";
}