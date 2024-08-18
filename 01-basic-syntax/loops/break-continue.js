/*
break - sai do loop;
continue - pula uma iteração do loop.
*/

// Exemplo do break

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 7) {
        // sai do loop quando i é igual a 7
        break;
    }
}

console.log('\n');

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue; // pula para a próxima iteração quando o número e impar   
    }

    console.log(i);
}