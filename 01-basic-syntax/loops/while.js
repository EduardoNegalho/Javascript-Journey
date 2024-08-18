/*
-> O while ele não tem uma quantidade de execuções definidas,
pois só para quando a condição é falsa, para isso deve-se
ter uma atenção na var de controle.

-> Executa enquanto a condição for true
*/

// Exemplo 1
let count = 0; // variável de controle

while (count <= 10) {
    console.log(count);
    
    count++; // controlando a variável de controle
}

// Exemplo 2
let sum = 0; // variável para armazenar a soma
let number = 1; // variável de controle

while (number <= 100) {
    sum += number; // adiciona o valor atual de number à soma
    number++; // incrementa a variável de controle
}

console.log("A soma dos números de 1 a 100 é: " + sum);