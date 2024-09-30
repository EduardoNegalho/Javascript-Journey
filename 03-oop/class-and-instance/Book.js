// Para criar classes usa-se a keyword 'class'
// Os nomes das classes devem começar com uma letra maiúscula por boa prática

class Book {
    // Construtror da classe, onde serão passsado os atributos
    constructor(title) {
        this.title = title;
        this.published = false;
    }

    publish() {
        this.published = true;
    }
}

const eragon = new Book('Eragon'); // Criando uma instância de Book
eragon.publish(); // Acessando um método

console.log(eragon);
