import leia from 'readline-sync';

var golA = leia.questionInt("Digite a quantidade de gols do time A: ");
var golB = leia.questionInt("Digite a quantidade de gols do time B: ");

var diferenca = Math.abs(golA - golB);

if(diferenca === 0){
    console.log("Deu empate!!")
} else if(diferenca === 1 || diferenca === 2 || diferenca === 3) {
    console.log("Partida normal, vitoria de um dos times!!")
} else {
    console.log("Goleada!! um tiem passeou em campo!!")
}
