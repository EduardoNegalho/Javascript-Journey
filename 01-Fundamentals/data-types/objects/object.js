// Objeto é uma coleção de pares chave:valor
// => É o tipo de dado mais importante do JavaScript

// Criando um objeto literal com {}
const car = {
    brand: 'BMW',
    model: 'M3',
}

// Acessando propriedades do objeto
car.brand; // => 'BMW'
car['model'] // => 'M3'

// Adicionando uma propriedade
car.yearOfManufacture = 2024;

console.table(car);

// Apagando uma propriedade do objeto
delete car.yearOfManufacture;

console.table(car);

// Criando um objeto com "new"(construtor)
const user = new Object();
// Adicionando as propriedades
user.name = 'Eduardo';
user.age = 20;
user.isAdm = true;

console.table(user);

// Desestruturando um objeto
const { name, age, isAdm } = user;
// cria variáveis separadas, cada uma com o nome da prop e recebe seu respectivo valor
console.log(name);
console.log(age);
console.log(isAdm);
