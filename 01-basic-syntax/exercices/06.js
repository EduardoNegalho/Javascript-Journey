/*
Exercício 6: Crie um programa que receba uma nota de 0 a 10 e retorne "Aprovado" se a nota for maior ou igual a 6, e "Reprovado" se for menor que isso.
*/

function checkSituation(score) {
    if (typeof score !== 'number' || score < 0) return 'A nota precisa ser um inteiro positivo';

    if (score >= 6 && score <= 10) return 'Aprovado';
    return 'Reprovado';
}

console.log(checkSituation(10));
console.log(checkSituation(7.5));
console.log(checkSituation(6));
console.log(checkSituation(4));
