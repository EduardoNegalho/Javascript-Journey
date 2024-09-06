class Calculadora {
    // métodos estáticos
    static soma(a, b) {
        return a + b;
    }

    static subtracao(a, b) {
        return a - b;
    }

    static multiplicacao(a, b) {
        return a * b;
    }

    static divisao(a, b) {
        if (b === 0) {
            throw new Error("Não é possível dividir por 0")
        }
        return a / b;
    }
}

// Chamando os métodos estáticos diretamente na classe
console.log(Calculadora.soma(10, 5)); // Imprime 15
console.log(Calculadora.subtracao(10, 5)); // Imprime 5
console.log(Calculadora.multiplicacao(10, 5)); // Imprime 50
console.log(Calculadora.divisao(10, 5)); // Imprime 2

// Tentativa de divisão por zero
try {
    console.log(Calculadora.divisao(10, 0)); // Lança um erro
} catch (error) {
    console.error(error.message); // Imprime 'Divisão por zero não é permitida'
}