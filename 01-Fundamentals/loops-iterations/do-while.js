// O do while loop é uma variante do loop while. Este loop executará o bloco de código uma vez, antes de verificar se a condição é verdadeira, então ele repetirá o loop enquanto a condição for verdadeira.

const readlineSync = require('readline-sync');

let option = '';
do {
    const number = readlineSync.question('Digite um numero: ');
    console.log(number);

    option = readlineSync.question('(c) continuar ou (s) sair: ');
}
while (option !== 's');

console.log('Laço encerrado');
