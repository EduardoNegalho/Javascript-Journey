function needsLicense(kind) {
    if (kind === 'car' || kind === 'truck') return true;

    return false;
}

function chooseVehicle(option1, option2) {
    if (option1 < option2) {
        return `${option1} is clearly the better choice.`
    }

    return `${option2} is clearly the better choice.`
}

function calculateResellPrice(originalPrice, age) {
    if (age >= 1 && age < 3) return originalPrice * 0.8;

    if (age >= 3 && age <= 10) return originalPrice * 0.7;

    return originalPrice * 0.5;
}
