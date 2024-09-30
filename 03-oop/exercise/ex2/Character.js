class Character {
    constructor(name, pLife, pAttack, pDefense) {
        this.name = name;
        this.pLife = pLife;
        this.pAttack = pAttack;
        this.pDefense = pDefense;
    }

    attack(oponent) {
        oponent.pLife -= this.pAttack - oponent.pDefense;
    }
}

module.exports = Character;