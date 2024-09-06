function totalBirdCount(birdsPerDay) {
    let totalBirds = 0;

    for (const x of birdsPerDay) {
        totalBirds += x;
    }

    return totalBirds
}

function birdsInWeek(birdsPerDay, week) {
    let totalBirdsInWeek = 0

    if (week === 1) {
        for (let i = 0; i < 7; i++) {
            totalBirdsInWeek += birdsPerDay[i];
        }
        return totalBirdsInWeek;
    } else {
        for (let i = (week * 7) - 7; i < (week * 7); i++) {
            totalBirdsInWeek += birdsPerDay[i]
        }
        return totalBirdsInWeek
    }
}

function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i++) {
        if (i % 2 === 0) {
            birdsPerDay[i] += 1;
        }
    }
    return birdsPerDay;
}
