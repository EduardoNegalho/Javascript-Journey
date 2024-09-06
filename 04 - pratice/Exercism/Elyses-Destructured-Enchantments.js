function getFirstCard(deck) {
    const [firstCard, ...restCards] = deck;
    return firstCard;
}

function getSecondCard(deck) {
    const [, second] = deck;
    return second;
}

function swapTopTwoCards(deck) {
    const [first, second, ...rest] = deck;
    return [second, first, ...rest];
}

function discardTopCard(deck) {
    const [newStack, ...rest] = deck;
    return [newStack, rest];
}

const FACE_CARDS = ['jack', 'queen', 'king'];

function insertFaceCards(deck) {
    const [firstCard, ...restDeck] = deck;
    return [firstCard, ...FACE_CARDS, ...restDeck];
}