// O escopo de variáveis refere-se ao local onde a variável é visível
// -> "var" possui escopo de função, caso contrário escopo global
// -> "let" e "const" possuem escopo de bloco, um bloco é delimitado por {}, caso contrário a variável é global

// Declaração "var"
var x = 10; // escopo global, pode ser acessada de qualquer lugar
console.log(x); // acessando a variável "x"

function scopeVar(){
    console.log(x); // acessando a variável "x", pois ela é global
    
    var y = 100; // escopo de função, essa variável só pode ser acessada dentro dessa função
    console.log(y); // acessando a variável "y" dentro da função
    // Se tentar acessar a variável "y" fora da função ocorrerá um erro.
}

// Declarações "let" e "const"
let price = 9.99; // escopo global
const PI = 9.99; // escopo global
console.log(price); // acessando a variável "price"
console.log(PI); // acessando a constante "PI"

if (true) {
    console.log(price); // acessando a variável "price", pois ela é global
    console.log(PI); // acessando a constante "PI", pois ela é global   

    // Declarando dentro do bloco "if", ou seja só será possível acessar dentro desse bloco
    // caso contrário ocorrerá um erro
    let z = 44;
    const age = 20;

    console.log(z); // acessando a variável "price" 
    console.log(age); // acessando a constante "age"  
}