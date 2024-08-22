/*
Exercício 7: Utilize o switch para criar um programa que receba um número de 1 a 7 e retorne o dia da semana correspondente.
*/

function dayOfWeek(day) {
    if (typeof day !== 'number') return 'O dia da semana precisa ser um número';

    switch (day) {
        case 1:
            return 'Segunda-feira';
    
        case 2:
            return 'Terça-feira';
    
        case 3:
            return 'Quarta-feira';
    
        case 4:
            return 'Quinta-feira';
    
        case 5:
            return 'Sexta-feira';
    
        case 6:
            return 'Sábado';
    
        case 7:
            return 'Domingo';
    
        default:
            return 'Nenhum dia corresponde com esse número';            
    }
}

console.log(dayOfWeek(0));
console.log(dayOfWeek(1));
console.log(dayOfWeek(2));
console.log(dayOfWeek(3));
console.log(dayOfWeek(4));
console.log(dayOfWeek(5));
console.log(dayOfWeek(6));
console.log(dayOfWeek(7));
console.log(dayOfWeek(8));
