// Use a switch instrução para selecionar um dos muitos blocos de código a serem executados.

// O "switch" avalia uma expressão e compara com os valores de cada caso
// Se for igual executa o bloco de código associado

// Exemplo de uso do switch case
let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";

}
console.log(day);