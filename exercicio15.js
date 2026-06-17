import leia from 'readline-sync';

var horas = leia.questionInt("Digite o tempo que o carro ficou estacionado: ");
var cartao = leia.keyInSelect("Voce tem cartao fidelidade?", ["Sim", "Nao"]);

switch (horas){
    case "1":
    case "2":
    case "3":
        
}