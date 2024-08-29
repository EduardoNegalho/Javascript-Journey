// Use if para especificar um bloco de código a ser executado, se uma condição especificada for verdadeira
// Use else para especificar um bloco de código a ser executado, se a mesma condição for falsa
// Use else if para especificar uma nova condição a ser testada, se a primeira condição for falsa

// Exemplo de if
const hour = 12;

if (hour < 18) {
    console.log('Bom dia!');
}

// Exemplo if-else
const age = 17;

if (age >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

// Exemplo if-else if-else
const score = 9;

if (score === 10) {
    console.log('Aprovado com excêlencia');
} else if (score >= 7 && score < 10) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}