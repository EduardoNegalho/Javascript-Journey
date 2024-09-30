class PhoneNumber {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    get numberInfo() {
        const fixedString = this.phoneNumber.replace(/[\sa-zA-z]/g, "");
        const countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
        const ddd = fixedString.match(/(?<=\()\d+(?=\))/);
        const number = fixedString.match(/(?<=\)).+/)[0].replace(/-/, "");

        return `Código do país: ${countryCode} \nDDD: ${ddd} \nNúmero do telefone: ${number}`;
    }
}

const myNumber = new PhoneNumber('+55 (61) 91234-5678');
console.log(myNumber.numberInfo);
