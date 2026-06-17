import leia from 'readline-sync';

var idade = leia.questionInt("Digite sua idade: ");

if(idade >= 18){
    var nome = leia.question("Digite seu nome: ");
    console.log(nome + " voce esta autorizado a ir na viajem");
} else {
    var autorizacao = leia.keyInSelect(["Sim", "Nao"], "Voce foi autorizado pelos pais? ");
    if (autorizacao === 0) {
        var nome = leia.question("Digite seu nome: ");
        console.log(nome + " voce esta autorizado a ir na viagem");
    } else {
        console.log("Voce nao esta autorizado a ir na viagem");
    }
}