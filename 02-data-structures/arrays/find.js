/*
Find:

-> Retorna o primeiro elemento que corresponde com a condição
*/

const passengers = [
    { name: "Ademar", birthYear: 1975 },
    { name: "Tiago", birthYear: 1997 },
    { name: "Eduarda", birthYear: 2004 },
    { name: "Jessica", birthYear: 1984 },
    { name: "Eduardo", birthYear: 2003 },
    { name: "Enzo", birthYear: 2015 },
    { name: "Natan", birthYear: 2001 },
    { name: "Ana", birthYear: 1995 }
];

const shopCart = [
    { product: "sapato", quantity: 2, unitPrice: 118 },
    { product: "tenis", quantity: 3, unitPrice: 89 },
    { product: "bermuda", quantity: 1, unitPrice: 48 },
    { product: "camiseta", quantity: 2, unitPrice: 25 }
];

// Retorne o primeiro elemento que possui o nome Eduardo
const eduardo = passengers.find(element => element.name.toLowerCase() === 'eduardo');

console.table(eduardo);

// Retorne o primeiro elemento com valor unitário menor que 70
const product = shopCart.find(element => {
    if (element.unitPrice < 70) return element
});

console.table(product);