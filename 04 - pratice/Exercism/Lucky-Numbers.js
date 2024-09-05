function twoSum(array1, array2) {
    let num1 = array1.join('');
    let num2 = array2.join('');

    return Number(num1) + Number(num2);
}

function luckyNumber(value) {
    return value == String(value).split('').reverse().join('') ? true : false;
}

function errorMessage(input) {
    if (!input) return 'Required field';
    return Number(input) ? '' : 'Must be a number besides 0';
}
