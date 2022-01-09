console.log("Trabalhando com atribuição de variáveis");


//Constantes são variáveis que não pode ser reescritas
const nome = "Baco";
const sobrenome = "Morettini";
//let é uma variváel que pode ser reescrita
let apelido = "Breja"
let contador = 0
contador = contador + 1;


//concatenando variáveis com espaço
console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);
console.log(`meu nome é ${nome} ${sobrenome}`); //interpolação, maneira massa de se fazer

const nomeCompleto = nome + sobrenome;  //sobrescrita
console.log(nomeCompleto);

let idade; //declarando variável
idade = 26; //atribuindo valor
idade = idade + 1;
console.log(idade);
