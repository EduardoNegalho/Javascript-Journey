function createScoreBoard() {
    return {
        "The Best Ever": 1000000
    }
}

function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;
    return scoreBoard;
}

function removePlayer(scoreBoard, player) {
    if (player in scoreBoard) {
        delete scoreBoard[player];
    }

    return scoreBoard;
}

function updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points;

    return scoreBoard;
}

function applyMondayBonus(scoreBoard) {
    for (const player in scoreBoard) {
        scoreBoard[player] += 100;
    }

    return scoreBoard;
}

function normalizeScore(params) {
    return params.normalizeFunction(params.score);
}
