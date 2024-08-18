/*
-> O for é um loop, ou seja executa um bloco de código várias vezes, 
porém ele já tem um parada determinada passada para ele.

Sintaxe:

inicializador ; condição ; expressão final
*/

// Exemplo 1
for (let i = 0; i < 5; i++) {
    console.log(`${i} - Hello World!`);
}

console.log('\n');

// Exemplo 2
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é impar`);
    }
}

console.log('\n');

// Exemplo 3
for(let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log('\n');

// Exemplo 4
for (let i = 0; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}