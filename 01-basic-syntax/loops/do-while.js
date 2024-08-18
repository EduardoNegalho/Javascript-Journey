/*
-> O do-while ele não tem uma quantidade de execuções definidas,
pois só para quando a condição é falsa, para isso deve-se
ter uma atenção na var de controle, porém ele executa pelo menos uma vez
para depois começar a verificar a condição.
*/

// Exemplo 1
let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);

console.log('\n');

// Exemplo 2
let number1 = 2;

do {
    console.log(number1);
    number1 += 2;
} while (number1 <= 10);

// Exemplo 3
let number2 = 5;
let factorial = 1;

do {
    factorial *= number2;
    number2--;
} while (number2 > 0);

console.log("\nO fatorial de 5 é: " + factorial);