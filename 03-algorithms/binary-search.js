// Algoritmo de pesquisa binária
// Livro: Entendendo algoritmos

// -> A pesquisa binária só funciona em um array ordenado 
// -> Se o item estiver no array, retorna o item
// -> Caso contrário retorna null
function binarySearch(arr, item) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];

        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null
}

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -4));
