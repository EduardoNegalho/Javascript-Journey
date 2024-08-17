/*
IF ELSE E ELSE IF

-> O if e o else if executam um determinado bloco de código
se a condição for verdadeira.

-> O else executa seu bloco se nenhuma das condição anteriores
forem verdadeiras.

-> Em Javascript possui o if ternário que, basicamente é uma
simplificação para o if e else tradicional.
*/

// Exemplo 1
const media = 7;

if (media >= 7) {
    console.log("Você está aprovado!");
} else {
    console.log("Você está reprovado!");
}

// Exemplo 2

const idade = 20;

if (idade < 18) {
    console.log("Você não pode dá entrada no seu processo da CNH!");
} else {
    console.log("Você pode dá entrada no processo da CNH...");
}

// Exemplo 3
const nota = 9;

if (nota === 10) {
    console.log("Aprovado com excelência")
} else if (nota >= 5 & nota < 10) {
    console.log("Aprovado!");
} else {
    console.log("Reptovado");
}

// Exemplo 4
const ano = 2003
const idadeAtual = 2024 - 2003;
//                   condição     ?     true         :      false
const situacao = idadeAtual >= 18 ? 'Maior de idade' : 'Menor de idade';

console.log(situacao);
