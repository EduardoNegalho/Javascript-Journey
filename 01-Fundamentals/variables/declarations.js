// Variáveis é um "armazenamento nomeado" para dados.
// Em javascsript possui três tipos de declarações, "var", "let" e "const"
// Recomendado usar apenas "let" e "const"
// Por conversão usa-se a regra do camelCase

// -> Declarando variável com "var"
// -> Possui escopo de função
// -> Pode ser reatribuida
// -> Usada em navegadores antigos
var car = 'Golf';
console.log(car);
car = 'Palio'; // Reatribuindo o valor da variável 'car'
console.log(car);

// -> Declarando variável com "let"
// -> Possui escopo de bloco
// -> Pode ser reatribuida
// -> Utilize "let" e não "var" atualmente
let country = "Brasil";
console.log(country);
country = 'USA'; // Reatribuindo o valor da variável 'country'
console.log(country);

// -> Declarando constante com "const"
// -> Possui escopo de bloco
// -> Não pode ter seu valor alterado
// -> Utilize sempre que não quiser que o valor seja alterado
const PI = 3.14;
console.log(PI);
// PI = 4; -> Erro: Assignment to constant variable.