/*
Filter:

-> Imutabilidade
-> Retorna um novo array com os elementos filtrados
*/

const childrenAge = [2, 0, 5, 8, 12, 17, 13, 7, 10];

const mailList = [
    "robson@hotmail.com",
    "fulano@gmail.com",
    "cleiton@hotmail.com",
    "diego@hotmail.com",
    "eu@adonis.com",
    "aloha@hawaii.com",
    "outro@emailqualquer.com"
];

const passengers = [
    { name: "Ademar", birthYear: 1975 },
    { name: "Tiago", birthYear: 1997 },
    { name: "Eduarda", birthYear: 2004 },
    { name: "Jessica", birthYear: 1984 },
    { name: "Enzo", birthYear: 2015 },
    { name: "Natan", birthYear: 2001 },
    { name: "Ana", birthYear: 1995 }
];

// Rertorne as idades entre 3 e 10
const childrenFiltred = childrenAge.filter(age => age >= 3 && age <= 10);

console.table(childrenFiltred);

// Retorne os email que possui o dominio hotmail.com
const hotmailDomain = mailList.filter(email => email.includes('hotmail.com'));

console.table(hotmailDomain);

// Retorne apenas os nomes que tem 5 letras
const namesWith5Letters = passengers.filter(elemnet => {
    if (elemnet.name.length === 5) return elemnet 
});

console.table(namesWith5Letters);