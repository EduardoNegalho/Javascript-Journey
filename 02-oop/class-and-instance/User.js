class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(email, password) {
        if (email === this.email && password === this.password) {
            console.log('Login realizado com sucesso!');
            return
        }
        console.log('Email ou senha inválido');
    }
}

const user = new User('Eduardo Marques', 'eduardo@email.com', 1234);

console.log(user);

user.login('eduardo@email.com', 1234);
user.login('dudu@email.com', 1234);
user.login('eduardo@email.com', 4321);
user.login('dudu@hotmail.com', 4321);