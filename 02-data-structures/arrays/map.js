/*
Map:

-> Imutabilidade
-> Retorna um novo array com os novos dados
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

// Crie um novo array com uma mensagem informando a idade de cada passageiro
const passengersAges = passengers.map(passenger => {
    return `${passenger.name} tem ${2024 - passenger.birthYear} anos`;
})

console.table(passengersAges);