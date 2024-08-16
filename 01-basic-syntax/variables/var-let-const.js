/*
Variáveis é basicamente um "armazenamento nomeado" para dados.

VAR -> usado para navegadores mais antigos, possui escopo de função, ocorre o hoisting
LET -> usado atualmente a partir do ES6, possui escopo de bloco, não pode ser acessada antes de ser inicializada
CONST -> usado atualmente a partir do ES6, possui escopo de bloco, não pode ser acessada antes de ser inicializada, deve ser declarada e inicializada ao mesmo tempo, não pode ter seu dado alterado(reatribuido)
*/

// Declarando as variáveis
var name = 'Eduardo';
let age = 20;
const CPF = 12345678910;

// Exibindo os valores no console
console.log(name);
console.log(age);
console.log(CPF);

// Reatribuindo valores da variáveis
name = 'Dudu'; // Eduardo -> Dudu
age = 21; // 20 -> 21

// Tentando reatribuir um valor a uma constante
// CPF = 12345678911; // Erro! Não pode reatribuir valor a uma constante

// Declarando variáveis sem atribuir valores
var x;
let y;
// const z; // Const não pode ser declarada sem valor
console.log(x, y);
