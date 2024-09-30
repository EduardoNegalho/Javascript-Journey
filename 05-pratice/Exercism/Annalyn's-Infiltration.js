function canExecuteFastAttack(knightIsAwake) {
    return knightIsAwake === true ? false : true;
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if (knightIsAwake || archerIsAwake || prisonerIsAwake) return true;

    return false;
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if (!archerIsAwake && prisonerIsAwake) return true

    return false;
}


function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent,
) {
    if (petDogIsPresent && !archerIsAwake) return true;

    if (!petDogIsPresent && (prisonerIsAwake && !knightIsAwake && !archerIsAwake)) {
        return true;
    }

    return false
}
