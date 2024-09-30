function sum(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);

    if(isNaN(num1) || isNaN(num2)) {
        // caso for, lança um erro 
        throw new Error('os argumentos precisam ser dois números.');
    }

    return num1 + num2;
}

try { // tenta executar 
    console.log(sum(17, 8));
    console.log(sum(true, 10));
    console.log(sum(1, false));
    console.log(sum('15', '20'));
    console.log(sum(undefined, 29));
    console.log(sum('onze', 29));
} catch (error) {
    // caso tenha um erro no "try" executa esse bloco
    console.log(error.message);
} finally {
    // este bloco sempre executa independente se tem erro ou não
    console.log('Operações encerradas.');
}
