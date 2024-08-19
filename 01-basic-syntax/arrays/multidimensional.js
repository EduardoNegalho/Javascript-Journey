/*
Arrays multidimensionais são array que possuem outros arrays dentro deles.
*/

// Exemplo
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// acessando elemento dentro de uma matriz
console.log(arr[0][1]); // no indice 0 pegue o elemento do indice 1

// Podemos modificar um elemento específico da matriz
arr[2][2] = 10; // Altera o valor na terceira linha e terceira coluna para 10
console.log(arr[2][2]); // Saída: 10

// Iterando sobre uma matriz com loops
for (let i = 0; i < arr.length; i++) {         // Loop através de cada linha
    for (let j = 0; j < arr[i].length; j++) {   // Loop através de cada coluna dentro da linha
        console.log(`Elemento na posição [${i}][${j}] é ${arr[i][j]}`);
    }
}

// Adicionando uma nova linha à matriz
arr.push([10, 11, 12]); // Adiciona uma nova linha no final da matriz
console.log(arr);

// Adicionando uma nova coluna à matriz
for (let i = 0; i < arr.length; i++) {
    arr[i].push(i * 3 + 4); // Exemplo: adicionando um valor calculado
}
console.log(arr);
