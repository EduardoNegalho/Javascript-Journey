// O hoisting move as declarações de variável e funções para o topo do código antes da execução do código
// Há uma diferença no hoisting para as declarações "var", "let" e "const"

// var: Declarada no topo do escopo, inicializada com undefined.
// let e const: Declaradas no topo do escopo, mas com uma "Zona Morta Temporal", o que significa que não podem ser usadas até que sejam realmente declaradas no código.

// Com "var" é possível acessa-lá antes da declaração, porém seu valor será "undefined"
console.log(a); // undefined
var a = 10;
console.log(a); // a

// -> Com "let" e "const" não é possível acessar a variável antes da sua inicialização
// console.log(b); -> Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20

// console.log(c); -> ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // 30