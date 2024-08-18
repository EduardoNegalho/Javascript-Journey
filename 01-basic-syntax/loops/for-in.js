/*
O for in é utilizado para perocorrer sobre as chaves de um objeto
*/

// Exemplo 1
const obj = {
    nome: 'Mike',
    profissao: 'Advogado',
    habilidade: 'Memória fotográfica'
};

for (const key in obj) {
    console.log(key); // imprime somente a chave
    console.log(obj[key] + '\n'); // imprime o valor 
    
}

// Exemplo 2
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const key in arr) {
    console.log(key); // imprime somente a chave(indice)
    console.log(arr[key] + '\n'); // imprime o elemento 
}