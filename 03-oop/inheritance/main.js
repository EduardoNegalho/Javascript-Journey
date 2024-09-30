class Property {
    constructor(area, price) {
        this.area = area;
        this.price = price;
    }

    getPricePerSquereMeter() {
        return this.price / this.area;
    }
}

class House extends Property{

}

class Apartament extends Property{
    constructor(number, area, price){
        super(area, price);
        this.number = number;
    }

    getFloor() {
        return this.number.slice(0, -2)
    }
}

const land = new Property(200, 450000);

const myHouse = new House(120, 300000);

const myApartament = new Apartament('110', 100, 250000);

console.log(land);
console.log(myHouse);
console.log(myApartament);
