// Présentation
let num1ChaineCa, num2ChaineCa;
let calculatrice = new CalculatriceOOP();

function ClickNumber(number){
    if(calculatrice.num1 == undefined){
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
    
    if(calculatrice.num1 != undefined && calculatrice.num2 != undefined && calculatrice.operation != undefined){

        afficheur.value = number;
    }else{
        if(num1ChaineCa != undefined)
        afficheur.value += num1ChaineCa 
        if(calculatrice.operation != undefined)
            afficheur.value += calculatrice.operation     
        if(num2ChaineCa != undefined)
            afficheur.value += num2ChaineCa 

        }
 
   
}

function Operation(operationParam){
    if(calculatrice.operation == undefined){
        calculatrice.operation = operationParam;
        calculatrice.num1 = parseFloat(num1ChaineCa);
        Afficher();
    }else{
        alert("Vous avez déjà choisi l'opération " + calculatrice.operation);
    }
}

function Egale(){
    calculatrice.num1 = parseFloat(num1ChaineCa);
    calculatrice.num2 = parseFloat(num2ChaineCa);
    calculatrice.Calculer();
    Afficher(calculatrice.solution);
}

function Init(){
    calculatrice.Init();
    num1ChaineCa = undefined;
    num2ChaineCa = undefined;
    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
}