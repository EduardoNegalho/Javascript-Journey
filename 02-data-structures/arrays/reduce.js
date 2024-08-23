/*
Reduce:

-> Imutabilidade
-> Executa a função sobre cada elemento e retorna um único valor
*/

const shopCart = [
    { product: "sapato", quantity: 2, unitPrice: 118 },
    { product: "tenis", quantity: 3, unitPrice: 89 },
    { product: "bermuda", quantity: 1, unitPrice: 48 },
    { product: "camiseta", quantity: 2, unitPrice: 25 }
];

const childrenAge = [2, 0, 5, 8, 12, 17, 13, 7, 10];

// Retorne qual o valor total das compras
const totalShop = shopCart.reduce((acc, element) => acc += element.quantity * element.unitPrice, 0);

console.log(totalShop);

// Retorne qual o total de idades de todas as crianças
const totalAges = childrenAge.reduce((acc, age) => acc += age, 0);

console.log(totalAges);