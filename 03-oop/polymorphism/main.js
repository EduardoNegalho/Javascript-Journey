class Vehicle {
    move() {
        console.log('O veículo está se movendo.');
    }
}

class Car extends Vehicle {
    move() {
        console.log('O carro está se movendo.');
    }
}

class Ship extends Vehicle {
    move() {
        console.log('O navio está navegando.');
    }
}

class Aircraf extends Vehicle {
    move(speed) {
        console.log(`A aeronave está voando a ${speed} Km/h.`);
    }
}

const carro = new Car();
const navio = new Ship();
const aeronave = new Aircraf();

carro.move();
navio.move();
aeronave.move(320);