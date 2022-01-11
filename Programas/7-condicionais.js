console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");

console.log(listaDeDestinos);

//Encadeando if
// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item pois efetuou a compra
// }
// else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item pois efetuou a compra
// }
// else {
//     console.log("Não é maior de idade e não posso vender");
// }
// console.log(listaDeDestinos);


//se comprador for maior de 18 OU está acompanhado
console.log("Comprando as passagens")
if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Passagem comprada!\n");
    listaDeDestinos.splice(1, 1); //removendo item pois efetuou a compra
}
else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque:")

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem")
}
else {
    console.log("Você não pode embarcar")
}



// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

