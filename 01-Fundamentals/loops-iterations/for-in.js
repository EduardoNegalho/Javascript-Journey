// A instrução for in percorre as propriedades de um objeto

const person = {
    firstName: 'Eduardo',
    lastName: 'Negalho',
    age: 20
}

// Exemplos de uso do for in

// Ex1
let msg = '';
for (const key in person) {
    msg += person[key] + ' ';
}
console.log(msg);

// Ex2
for (const key in person) {
    console.log(`${key}: ${person[key]}`);  
}