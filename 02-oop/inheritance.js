class Animal {
    #name;
    #age;
    #species;

    constructor(name, age, species) {
        this.#name = name;
        this.#age = age;
        this.#species = species;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get species() {
        return this.#species;
    }

    set name(name) {
        if (typeof name !== 'string') return;
        this.#name = name;
    }

    set age(age) {
        if (typeof age !== 'number') return;
        if (age < 0) return;
        this.#age = age;
    }

    set species(species) {
        if (typeof species !== 'string') return;
        this.#species = species;
    }

    eat() {
        console.log(`${this.#name} está comendo.`);
    }

    drink() {
        console.log(`${this.#name} está bebendo.`);
    }

    sleep() {
        console.log(`${this.#name} está dormindo.`);
    }
}

class Dog extends Animal{
    constructor(name, age){
        super(name, age, 'Cachorro'); // Chamando o construtor da classe Pai
    }

    bark() {
        console.log(`${this.name} está latindo.`);
    }
}

class Horse extends Animal{
    constructor(name, age){
        super(name, age, 'Cavalo')
    }

    neigh(){
        console.log(`${this.name} está relinchando.`);
    }
}

const boby = new Animal('Boby', 12, 'Vira-Lata');
boby.eat();
boby.drink();
boby.sleep();
// boby.bark(); => a classe Animal não tem o método bark

console.log();

const thor = new Dog('Thor', 6);
// A classe Cachorro herda os métodos da classe Animal
thor.eat();
thor.drink();
thor.sleep();
console.log(thor.species); 
// Mas também pode ter seus próprios métodos
thor.bark() // A classe Cachorro tem seu próprio método, bark!

console.log();

const cavaloBrancoDeNapoleao = new Horse('O Cavalo Branco de Napoleao', 20);
// A classe Horde herda os métodos da classe Animal
cavaloBrancoDeNapoleao.eat();
cavaloBrancoDeNapoleao.drink();
cavaloBrancoDeNapoleao.sleep();
console.log(cavaloBrancoDeNapoleao.species); 
// Mas também pode ter seus próprios métodos
cavaloBrancoDeNapoleao.neigh() // A classe Horse tem seu próprio método, neigh!
