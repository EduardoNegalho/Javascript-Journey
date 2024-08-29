/*
IIFE (Immediately-Invoked Function Expression):

-> É uma função que é executada assim que definida.
*/

// Criando uma IIFE
(function () {
    // Essa função 'funciona' basicamente como o escopo global 
    // Dentro dessa função escreva seu programa.

    function soma(a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b;
    }

    function mult(a, b) {
        return a * b;
    }

    function div(a, b) {
        return a / b;
    }

    const resultadoSoma = soma(17, 8);
    console.log(resultadoSoma);

    const resultadoSub = sub(17, 8);
    console.log(resultadoSub);

    const resultadoMult = mult(17, 8);
    console.log(resultadoMult);

    const resultadoDiv = div(17, 8);
    console.log(resultadoDiv);

})();

// Não é possível acessar variáveis que foram declaradas dentro da IIFE
// console.log(resultadoSoma); // resultadoSoma is not defined

// Atribuir uma IIFE a uma variável não armazenará a função em si, mas o resultado da função
const result = (function () {
    const nome = "Eduardo";
    return nome;
})();
// Imediatamente gera a saída:
console.log(result); // "Eduardo"