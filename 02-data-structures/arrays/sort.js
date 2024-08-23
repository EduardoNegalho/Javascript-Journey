/*
Sort:

-> Mutabilidade
-> Modifica o array original
-> Ordena o array
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

// Organize o carrinho de compras do maior número de produtos para o menor
shopCart.sort((a, b) => b.quantity - a.quantity)
console.table(shopCart)

// Organize os passageiros em ordem alfabética para a fila de embarque
passengers.sort((pA, pB) => {
    if(pA.name.toLowerCase() < pB.name.toLowerCase()) return -1;
    if(pB.name.toLowerCase() < pA.name.toLowerCase()) return 1;
    return 0;
})
console.table(passengers);