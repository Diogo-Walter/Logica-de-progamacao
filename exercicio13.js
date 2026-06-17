import leia from 'readline-sync';

var nota1 = leia.questionInt("Digite sua primeira nota: ");
var nota2 = leia.questionInt("Digite sua segunda nota: ");
var nota3 = leia.questionInt("Digite sua terceira nota: ");
var nota4 = leia.questionInt("Digite sua quarta nota: ");
var nota5 = leia.questionInt("Digite sua quinta nota: ");

var frequencia = leia.questionInt("Digite sua frequencia escolar: ");
var media = nota1 + nota2 + nota3 + nota4 + nota5 / 5;

if(media < 7 || frequencia < 75){
    console.log("Voce reprovou!!!")
} else if(media >= 7 || frequencia >= 75)
    console.log("Voce passou!!!")