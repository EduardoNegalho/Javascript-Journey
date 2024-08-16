/*
Hoisting é um mecanismo JavaScript onde variáveis ​​e declarações de funções são movidas para o topo de seu escopo antes da execução do código.
*/

console.log(variavelVar); // undefined
var variavelVar = 'Variável com var';
console.log(variavelVar); // 'Variável com var'

// console.log(variavelLet); // ReferenceError: Cannot access 'variavelLet' before initialization
let variavelLet = 'Variável com let';
console.log(variavelLet); // 'Variável com let'


// console.log(variavelConst); // ReferenceError: Cannot access 'variavelConst' before initialization
const variavelConst = 'Variável com const';
console.log(variavelConst); // 'Variável com const'
