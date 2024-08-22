/*
Exercício 2: Escreva um programa que troque os valores de duas variáveis sem usar uma terceira variável auxiliar.
*/

let a = 17;
let b = 8;

// desestruturação via array
[a, b] = [b, a];

console.log(a);
console.log(b);