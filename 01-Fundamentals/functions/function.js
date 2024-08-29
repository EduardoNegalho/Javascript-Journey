/*
Função são blocos de códigos que executam uma tarefa especifica, e são executados sempre que são invocados, possibilita a reutilização em diversos trechos ao longo do programa
*/

// Função nomeada
function f1() {
    console.log('Função nomeada');
}

// Função anônima
const f2 = function () {
    console.log('Função anônima');
}

// Arrow function
const f3 = () => {
    console.log('Arrow function');
}

// Invocando as funções
f1();
f2();
f3();

// Função com parâmetros
function soma(a, b) {
    console.log(a + b);
}

// Função com retorno
function sub(a, b) {
    return a - b;
}

// Função com parâmetros e retorno
function multi(a, b) {
    return a * b;
}

// Arrow function com 1 parâmetro e retono
const f4 = nome => `Olá ${nome}`;
console.log(f4('Eduardo'));
// Arrow function com parâmetros e retono
const f5 = (a, b) => a / b;
console.log(f5(17, 8));

// Função com parâmetros padrão e rest 
function f6(a = 0, b = 0, ...c) {
    let current = 0;

    for (const element of c) {
        current += element;
    }

    return current + (a * b);
}

console.log(f6(17, 8, ...[1, 2, 3, 4, 5]));