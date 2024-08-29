// Tipo de dado se refere ao tipo de dado que uma variável JavaScript pode conter. 
// Há sete tipos de dados primitivos em JavaScript (Number, BigInt, String, Boolean, Null, Undefined e Symbol).

// String
const name = 'Eduardo';
const middleName = "Marques";
const lastName = `Negalho`;

// Number
const age = 20;
const height = 1.84;

// Boolean
const isAMen = true;
const isRich = false;

// Undefined
let price; // quando não recebeu nenhum valor

// Null
const car = null; // quando é definido de propósito o valor null

// BigInt
const bigger = 198465165498516549846n;

// Symbol
const id = Symbol('id'); // valor único

console.log(typeof name);
console.log(typeof age);
console.log(typeof isAMen);
console.log(typeof price);
console.log(typeof car);
console.log(typeof bigger);
console.log(typeof id);