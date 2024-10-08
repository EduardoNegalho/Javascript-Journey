class Account{
    #password;
    #balance = 0;

    constructor(user) {
        this.email = user.email;
        this.#password = user.password;
    }

    getBalance(email, password){
        if (this.#authenticate(email, password)) {
            return this.#balance
        } 

        return null
    }

    #authenticate(email, password){
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "eduardo@gmail.com",
    password: '12345'
};

const myAccount = new Account(user);

console.log(myAccount);
console.log(myAccount.getBalance('eduardo@gmail.com', '12345'));
