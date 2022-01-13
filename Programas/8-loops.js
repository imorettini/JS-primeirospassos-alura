console.log("\nTrabalhando com loops");

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log(" \n Destinos possíveis:");
console.log(listaDeDestinos);

//while só é executado enquanto a expressão condicional utilizada resultar num valor verdadeiro
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break; // quando encontra o resultado esperado o loop para
    }

    contador += 1; //se não houvesse essa linha imprimiria loop de Salvador [0], porem somando +1 ele imprime todos os destinos da lista
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
}
else {
    console.log("Desculpe tivemos um erro!");
}

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break; // quando encontra o resultado esperado o loop para
    }
}
