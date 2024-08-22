/*
Exercício 17

-> Crie um objeto que represente uma pessoa com propriedades como nome, idade, e profissão. Imprima o nome e a profissão no console.

-> Adicione um método ao objeto criado no exercício anterior que retorne uma saudação com o nome da pessoa.
*/

const people = {
    name: 'Eduardo',
    age: 20,
    job: 'Desenvolvedor',
};
console.table(people);

people.say = function(){
    return `${this.name} está dizendo oi`;
}
console.log(people.say());