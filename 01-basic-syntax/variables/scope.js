/*
Escopos das variáveis

Var -> possui escopo de função, caso definida dentro da função ela só poderá ser acessada
// em qualquer parte dentro daquela função, caso definida fora de uma função 
// poderá ser acessada de qualquer parte do código

Let & Const -> possui escopo de bloco, ou seja ela só pode ser acessada dentro
// do bloco que foi definida, caso definida no escopo mais externo pode ser 
// acessada de qualquer local do código.
*/

// Declaradas no escopo mais externo
var x = 10;
let y = 20;
const z = 30;

function scopeVar() {
    console.log(x); // acessado var do escopo externo
    var x1 = 100;
    console.log(x1); // acessando var do escopo de função
}
scopeVar()

// Tentando acessar "var" definida dentro da função
// console.log(x1); // x1 is not defined

// If é um bloco de código
if (true) {
    // Acessando as variáveis do escopo externo
    console.log(y);
    console.log(z);

    // Criando variáveis dentro do bloco if
    let y1 = 200;
    const z1 = 300;

    // Acessando as variáveis declaradas dentro do bloco if
    console.log(y1);
    console.log(z1);
}

// Tentando acessar as variáveis definidas dentro do bloco if
// console.log(y1); // y1 is not defined
// console.log(z1); // z1 is not defined