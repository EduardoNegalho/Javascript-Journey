// Object.defineProperty && Object.defineProperties
// -> Possibilita ter mais controle sobre as chaves dos objetos

function Produto(nome, preco, estoque, tamanho) {
    // Verificação
    if (typeof tamanho !== 'number' || tamanho < 0) throw new Error("O tamanho precisa ser um número positivo");
    
    // Possibilita configurar mais de uma chave
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // exibe a chave
            value: nome, // exibe o valor da chave
            writable: false, // pode alterar
            configurable: false // configuravel
        },

        preco: {
            enumerable: true, // exibe a chave
            value: preco, // exibe o valor da chave
            writable: true, // pode alterar
            configurable: false // configuravel
        }
    });

    // Configura apenas uma chave
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // exibe a chave
        // value: estoque, // exibe o valor da chave
        writable: false, // pode alterar
        configurable: false // configuravel
    });

    Object.defineProperty(this, 'tamanho', {
        enumerable: true,
        get: function(){
            return tamanho
        },
        set: function(valor){
            if (typeof valor !== 'number') throw new TypeError('O tamanho precisa ser um número!');
            if (valor < 0) throw new Error("O tamanho precisa ser um valor positivo");
            
            tamanho = valor;
        },
        configurable: false
    })
}

const p1 = new Produto('Tênis', 550, 10, 43);

p1.nome = 'Camisa'; // 'writable' config. como 'false' não é possivel modificar
p1.preco = 599.99; // 'writable' config. como 'true' é possivel modificar

delete p1.estoque; // 'configurable' está 'false' não é possivel apagar a chave
console.log(p1.estoque) // não é possivel ver o valor pois o atributo 'value' não está configurado

console.log(p1.tamanho); // 'getter' para pegar o tamanho
p1.tamanho = 1; // 'setter' para setar o tamahno

try {
    const p1 = new Produto('Tênis', 550, 10, 43);
    console.log(p1); // Exibe o objeto com getters/setters
    console.table(p1); // Exibe o objeto em formato de tabela com valores
} catch (error) {
    console.error(error.message);
}