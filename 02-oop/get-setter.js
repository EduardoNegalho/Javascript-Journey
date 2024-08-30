// Get => Possibilita a criação de um método para obter algo.
// Set => Possibilita a criação de um método para definir algo.

class Carro {
    // Deixando um atributo privado
    #velocity;

    constructor(model) {
        this.model = model; // Inicializando a propriedade com o medelo passado por parâmetro
        this.#velocity = 0; // Inicializando a propriedade privada com 0
    }

    // Permite acessar o valor da propriedade privado fora da classe
    get velocity() {
        return this.#velocity;
    }

    // Permite definir o valor da propriedade #velocity
    // Set -> precisa receber algo como argumento
    set velocity(velocity) {
        if (typeof velocity !== 'number') return
        if (velocity <= 0 || velocity >= 120) return
        this.#velocity = velocity;
    }

    // Este método incrementa a velocidade atual do carro
    accelerate() {
        if (this.#velocity >= 120) return
        this.#velocity++;
    }
}

// Instanciando um objeto
const fusca = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
    fusca.accelerate();
}

console.log(fusca.velocity);
console.log(fusca);