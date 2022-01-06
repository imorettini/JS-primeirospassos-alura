const { parse } = require("path");

console.log("Conversão de tipos");

console.log("ano " + 2020); //Concatenando texto com número
console.log("2" + "2"); // Não irá somar os números, mas sim concatenar os textos
console.log(parseInt("2") + parseInt ("2")); // usar parse para onverter em int para depois somar - Conversão explicita

console.log("10" / "2"); // Aqui a conversão é implicita 
console.log("Baco" / "2"); //NaN - Not a Number

console.log(6.5); // usar ponto para números quebrados
console.log(6,5); // vírgula tem outros tipos de usos reservados na linguagem



