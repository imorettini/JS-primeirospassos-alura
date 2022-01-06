console.log("Trabalhando com atribuição de variáveis");


//Constantes são variáveis que não pode ser reescritas
const idade = 28;

const nome = "Baco";
const sobrenome = "Morettini";
//let é uma variváel que pode ser reescrita
let apelido = "Breja"

//concatenando variáveis com espaço
console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);
console.log(`meu nome é ${nome} ${sobrenome}`); //interpolação, maneira massa de se fazer

const nomeCompleto = nome + sobrenome;  //sobrescrita
console.log(nomeCompleto);