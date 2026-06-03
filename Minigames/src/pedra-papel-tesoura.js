import leia from "readline-sync";

var opcoes = ["Pedra", "Papel", "Tesoura"]

var escolhido = Math.floor(Math.random() * 3);
var escolhaeu = leia.keyInSelect(opcoes, "Escolha sua opcao: ");

if(escolhaeu === -1 ){
    console.log("Opcao invalida, jogo encerrado!!!")
} else {
    console.log("Voce escolheu: " + opcoes[escolhaeu]);
    console.log("O computador escolheu: " + opcoes[escolhido]);

    if(escolhido === escolhaeu) {
        console.log("Empatou!!!!!");
    
    } else if(
        escolhaeu === 0 && escolhido === 2 ||
        escolhaeu === 1 && escolhido === 0 ||
        escolhaeu === 2 && escolhido === 1
    ){
        console.log("VOCE GANHOUUUUU!!!!")
    }else {
        console.log("VOCE PERDEU HAHAHAHAHAHAHAH!!!")
    }
}

