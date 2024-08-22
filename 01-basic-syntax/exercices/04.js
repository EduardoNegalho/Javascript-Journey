/*
Exercício 4: Crie um programa que receba um número e verifique se ele é par ou ímpar.
*/

function oddOrEven(n) {
    if (n % 2 === 0) return 'Even';
    return 'Odd'
}

console.log(oddOrEven(17));
console.log(oddOrEven(100));
