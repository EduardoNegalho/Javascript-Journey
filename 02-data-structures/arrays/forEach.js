/*
forEach:

-> Mutabilidade
-> Percorre e altera o array original
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

// Adicione a propriedade (age) para cada pessoa
passengers.forEach(passenger => passenger.age = 2024 - passenger.birthYear);

// Imprima as informações de cada passageiro 

passengers.forEach(passenger => {
    console.log(`Nome: ${passenger.name} - Idade: ${passenger.age} - Ano de Nascimento: ${passenger.birthYear}`);
})