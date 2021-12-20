// Déclaration des variables
let num1,num2,solution,operation;
let num1String, num2String;

// saisie
num1String = '';
num2String = '';

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
        default:
            break;
    }
    return _solution;
}


// Présentation
function ClickNumber(number){
    if(num1 == undefined){
        if(num1String == undefined) ;
        num1String += number;
    } 
    else {
        if(num2String == undefined) ;
        num2String += number;
    } 

    Afficher();
}

function Afficher(number){

    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
    
    if(num1 != undefined && num2 != undefined && operation != undefined){

        afficheur.value = number;
    }else{
        if(num1String != undefined)
        afficheur.value += num1String 
        if(operation != undefined)
            afficheur.value += operation     
        if(num2String != undefined)
            afficheur.value += num2String 

        }
 
   
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        num1 = parseFloat(num1String);
        Afficher();
    }else{
        alert("Vous avez déjà choisi l'opération " + operation);
    }
}

function Egale(){
    num1 = parseFloat(num1String);
    num2 = parseFloat(num2String);
    solution = Calculer(num1,num2,operation);
    Afficher(solution);
}

function Init(){
    num1 = undefined;
    num2 = undefined;
    num1String = undefined;
    num2String = undefined;
    operation = undefined;
    let afficheur = document.getElementyId("afficheur");
    
    afficheur.value = "";
}