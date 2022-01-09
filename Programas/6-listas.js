console.log("Trabalhando com listas");

// Podemos declarar uma lista separadamente... mas não é prático
// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro"; 
//console.log(salvador, saoPaulo, rioDeJaneiro);

//Então criamos um Array! :D
const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");
listaDeDestinos.push("Curitiba") //adicionando um item na lista depois q ela ja foi declarada 
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //deletar elemento, no caso deletando na posição 1, um elemento
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); //exibindo item da lista, no caso posição 1 e posição 0
