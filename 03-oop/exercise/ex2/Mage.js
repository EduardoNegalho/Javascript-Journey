const Character = require("./Character");

class Mage extends Character {
    constructor(name, pLife, pAttack, pDefense, pMagic) {
        super(name, pLife, pAttack, pDefense);
        this.pMagic = pMagic;
    }

    attack(oponent) {
        const attack = (this.pAttack + this.pMagic) - oponent.pDefense;

        oponent.pLife -= attack;
    }

    heal(character) {
        character.pLife += 2 * this.pMagic;
    }
}

module.exports = Mage