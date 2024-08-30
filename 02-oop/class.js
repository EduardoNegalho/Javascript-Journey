// Criando "class" em javascript

class People{
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    say(){
        console.log(`${this.name} está falando`);
    }
}

// Criando uma instância para a classe People
const p1 = new People('Eduardo', 'Marques', 20);
p1.say() // Usando o método da classe
console.log(p1);
