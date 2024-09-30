class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addToStock(quantity) {
        if (quantity <= 0 || typeof quantity !== 'number') {
            console.log('A quantidade precisa ser um número maior que 0');
            return;
        }

        this.inStock += quantity;
    }

    calculateDiscount(percentage) {
        if (typeof percentage !== 'number' || percentage <= 0) {
            console.log('O percentual de desconto precisa ser um número maior que 0');
            return; 
        }

        return this.price * ((100 - percentage) / 100);
    }
}

const tshirt = new Product('Camisa', 'Camisa Nike Verão', 85.5);

tshirt.addToStock(50);
const priceWithDiscount = tshirt.calculateDiscount(10);

console.log(tshirt);
console.log(priceWithDiscount);
