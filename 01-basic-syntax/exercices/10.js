/*
Exercício 14

-> Escreva uma função que receba um número e retorne se ele é positivo ou negativo.

-> Crie uma função que receba dois números e retorne o maior deles.

-> Escreva uma função que calcule o fatorial de um número.
*/

function positiveOrNegative(num) {
    if (num >= 0) return 'Número positivo';
    return 'Número negativo';
}

console.log(positiveOrNegative(10));
console.log(positiveOrNegative(-5));
console.log(positiveOrNegative(0));
console.log(positiveOrNegative(-7));

console.log('\n');

function biggerNumber(num1, num2) {
    if (num1 === num2) return 'Ambos são iguais';
    if (num1 > num2) return `${num1} é maior que ${num2}`;
    return `${num2} é maior que ${num1}`;
}

console.log(biggerNumber(17, 8));
console.log(biggerNumber(99,99));
console.log(biggerNumber(33,48));

console.log('\n');

function fatorial(num) {
    if (num === 0) return 1;
    if (num === 1) return 1;

    return num * fatorial(num - 1);
}

console.log(fatorial(5));
