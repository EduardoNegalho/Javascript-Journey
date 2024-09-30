const Character = require("./Character");

class Thief extends Character {
    attack(oponent) {
        const attack = 2 * (this.pAttack - oponent.pDefense);

        oponent.pLife -= attack;
    }
}

module.exports = Thief;