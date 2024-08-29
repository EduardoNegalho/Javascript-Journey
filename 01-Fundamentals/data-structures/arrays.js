/*
Arrays - É um espaço contiguo na memória, arrays é usado para armazenar
diversos dados em um mesmo local.
*/

// array literal []
const arr = [100, 200, 300];
console.log(arr);

// array construtor
const arr2 = new Array(400, 500, 600);
console.log(arr2);

// acessando array com notação de []
console.log(arr[2]);

// alterando elemento do arr
arr[1] = 999;
console.log(arr);

// metódos
arr.push(400); // adiciona ao final
arr.unshift(0); // adiciona ao inicio
console.log(arr);

arr.pop(); // remove o último elemento
arr.shift(); // remove o primeiro elemento
console.log(arr);

// 'length' retorna o comprimeto do array
console.log(arr.length);

// 'toString' retorna o array como uma string
console.log(arr.toString());

// 'join' retorna o array como uma string, mas possibilita modificar o separador
console.log(arr.join(' / '));

arr.splice(1, 1); // usando para remover um elemento do indice 1
console.log(arr);
arr.splice(1, 0, 1000); // adicionando 1000 no indice 1
console.log(arr);

const newarr = arr.slice(0, 2); // fatiando o arr 
console.log(newarr);

// Desestruturação de array
const arr3 = ['BMW', 'Ferrari', 'Mercedez', 'Lamborghini', 'Bugatti'];
const [brand1, brand2, ...restBrands] = arr3;
console.log(brand1);
console.log(brand2);
console.log(restBrands);
