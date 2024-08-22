/*
Exercício 11

-> Crie um array com cinco frutas e imprima cada uma delas usando um loop for.

-> Escreva um programa que receba uma string e imprima o número de caracteres dela.

-> Crie um programa que inverta uma string dada pelo usuário.
*/

const fruits = ['maçã', 'laranja', 'goiaba', 'manga', 'pêra'];

for (const fruit of fruits) {
    console.log(fruit);
}

function caracteresInString(string) {
    return string.length
}

console.log(caracteresInString('Eduardo'))

function reverseAString(string) {
    let reverse = '';

    for (let i = string.length; i >= 1; i--) {
        reverse += string[i - 1];
    }
    return reverse;
}

console.log(reverseAString('eduardo'));
