/*
Exercício 8

-> Escreva um programa que imprima os números de 1 a 10 usando um loop for.

-> Crie um programa que imprima os números de 10 a 1 usando um loop while.

-> Faça um programa que some todos os números de 1 a 100 e imprima o resultado.
*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('\n');

let count = 10
while(count >= 1) {
    console.log(count);
    count--;
}

console.log('\n');

let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);