// Try-Catch é usado para tratar possíveis erros no programa

// Try => Contém o código que pode potencialmente lançar uma exceção.
// Catch => É executado caso ocorra uma exceção no bloco "try"
// Finally => É um bloco opcional, sempre será executado idependente se houve exceção ou não.
// throw => É usada para lançar uma exceção manualmente.

try {
    // Código que pode lançar uma exceção
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Código para lidar com a exceção
    console.error(`Ocorreu um erro: ${error.message}`);
} finally {
    // Código que será executado sempre
    console.log('Operação finalizada');
}

function riskyOperation() {
    // Simulando uma operação que pode falhar
    if (Math.random() > 0.5) {
        throw new Error('Algo deu errado');
    }
    return 'Sucesso!'
}
