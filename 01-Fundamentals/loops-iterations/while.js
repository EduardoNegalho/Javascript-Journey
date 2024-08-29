// O while loop percorre um bloco de código enquanto uma condição especificada for verdadeira.

const readlineSync = require('readline-sync');

// Exemplo de while
let option = '';

while (option !== 's') {
    const number = readlineSync.question('Digite um numero: ');
    console.log(number);

    option = readlineSync.question('(c) continuar ou (s) sair: ');
}

console.log('Laço encerrado');
