/*
Objetos são uma forma de representar coisas ou conceitos no contexto de um programa.

É uma estrutura de dados que permite ter pares de chave:valor.
*/

// Objeto literal {}
const people = {
    fullname: 'Eduardo Marques',
    age: 20,
    profissao: 'Desenvolvedor',
    // Criando um método de obj
    sayHello(){
        return "Hello peoples";
    }
};

// Acessando propriedades e métodos
console.log(people.fullname);
console.log(people.age);
console.log(people.sayHello());

// alterando valor de uma propriedade
people.fullname = 'Eduardo Marques Negalho';

console.table(people);

// Objeto construtor 
const car = new Object();

car.brand = 'Fiat';
car.model = 'Uno Escada';
car.start = function() { return 'Vruuum'; }

console.log(car.brand);
console.log(car.model);
console.log(car.start());

console.table(car);