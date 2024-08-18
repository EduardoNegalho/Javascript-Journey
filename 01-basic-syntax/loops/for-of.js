/*
O loop "for of" é utilizado para percorrer sobre objetos iterativos,
como por exemplo arrays, map, set... Basicamente ele percorre pelos 
elementos e não pela chaves.
*/

// Exemplo 1
const arr = ['Bob esponja', 'Batman', 'Hulk', 'Flash', 'Nemo'];

// for(para) cada 'elemento' of(do) 'arr'
for (const element of arr) {
    console.log(element);
}

// Exemplo 2
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const element of arr) {
    if (element % 2 === 0) {
        console.log(`O número ${element} é par`);
    }
}