/*
Exercício 5: Escreva um programa que verifique se uma pessoa é maior de idade ou menor de idade, baseado em uma variável de idade.
*/

function checkAge(age) {
    if (age >= 18) return 'Maior de idade';
    return 'Menor de idade';
}

console.log(checkAge(18));
console.log(checkAge(25));
console.log(checkAge(7));
