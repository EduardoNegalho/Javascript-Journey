// Possibilita que o mesmo método, com a mesma assinatura, se comporte de maneiras diferentes em classes diferentes

class Vehicle {
    #brand;
    #model;

    constructor(brand, model) {
        this.#brand = brand;
        this.#model = model;
    }

    get brand() {
        return this.#brand;
    }

    get model() {
        return this.#model;
    }

    start() {
        console.log('Vruuum');
    }
}

class Car extends Vehicle {
    // #brand;
    // #model;

    constructor(brand, model){
        super(brand, model);
        // this.#brand = brand;
        // this.#model = model;
    }

    start(){
        console.log(`O ${this.model} está ligando`);
    }
}

class Motocycle extends Vehicle {
    // #brand;
    // #model;

    constructor(brand, model){
        super(brand, model);
        // this.#brand = brand;
        // this.#model = model;
    }

    start(){
        console.log(`A ${this.model} está ligando seu motor de arranque`);
    }
}

const v1 = new Vehicle('Xiaomi', 'Patinete elétrico x1');
const uno = new Car('Fiat', 'Uno escada');
const cg125 = new Motocycle('Honda', 'CG125');

// Todas as instâncias tem o método 'start', porém seu comportamento é diferente para cada um
v1.start();
uno.start();
cg125.start();