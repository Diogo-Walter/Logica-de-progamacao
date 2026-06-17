import leia from 'readline-sync';

var valor = leia.questionFloat("Digite o valor da compra: ");
var vip = leia.keyInSelect(["Sim", "Nao"],"Voce e cliente VIP? ");

if(vip === 0 && valor >= 1000) {
    var desconto = valor - (valor * 0.20);
    console.log("Valor final da compra: " + desconto)
} else if(valor >= 500) {
    var desconto = valor - (valor * 0.10);
    console.log("Valor final da compra: " + desconto)
} else if(valor < 500) {
    var desconto = valor - (valor * 0.05)
    console.log("Valor final da compra: " + desconto)
}


