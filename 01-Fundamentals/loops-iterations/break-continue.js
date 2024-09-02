// break => sai do laço
// continue => pula uma iteração 

// Exemplos de break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sai do loop quando i é igual a 5
    }
    console.log(i); // Imprime os números de 0 a 4
}

console.log();

let i = 0;
while (i < 10) {
    if (i === 5) {
        console.log('O laço será interrompido agora');
        break; // Sai do loop quando i é igual a 5
    }
    console.log(i); // Imprime os números de 0 a 4
    i++;
}

console.log();

// Exemplos de continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Pula a iteração quando i é igual a 5
    }
    console.log(i); // Imprime os números de 0 a 9, exceto 5
}

console.log();

let j = 0;
while (j < 10) {
    j++;
    if (j % 2 !== 0) {
        continue; // Pula a iteração quando i é impar
    }
    console.log(j); // Imprime os números pares de 1 a 10
}