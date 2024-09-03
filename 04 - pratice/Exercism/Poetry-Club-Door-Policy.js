function frontDoorResponse(line) {
    return line[0].toUpperCase();
}

function frontDoorPassword(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function backDoorResponse(line) {
    const lineWithoutSpaces = line.trim()
    const lineLength = lineWithoutSpaces.length
    return lineWithoutSpaces.slice(lineLength - 1)
}

function backDoorPassword(word) {
    const password = `${frontDoorPassword(word)}, please`;

    return password;
}
