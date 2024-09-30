const Character = require("./Character");

module.exports = class Warrior extends Character {
    constructor(name, pLife, pAttack, pDefense, pShield) {
        super(name, pLife, pAttack, pDefense);
        this.pShield = pShield;
        this.position = 'ataque';
    }

    attack(oponent) {
        if (this.position.toLowerCase() === 'defesa') return

        super.attack(oponent)
    }

    changePosition() {
        let position = this.position.toLowerCase();

        if (position === 'defesa') {
            this.position = 'ataque';
            this.pDefense -= this.pShield;
        } else {
            this.position = 'defesa';
            this.pDefense += this.pShield;
        }
    }
}