// A instrução  for of percorre os valores de um objeto iterável.

// Ex1
const arr = [100, 200, 300, 400, 500, 600, 700, 800, 900];
for (const num of arr) {
    console.log(num);
}

// Ex2
const club = 'Flamengo';
for(const letter of club) {
    console.log(letter);
}

// Ex3
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += `${x} `;
}
console.log(text);
