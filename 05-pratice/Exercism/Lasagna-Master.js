function cookingStatus(time) {
    if (time === undefined) return 'You forgot to set the timer.';
    if (time === 0) return 'Lasagna is done.';
    return 'Not done, please wait.';
}

function preparationTime(layers, avaregeTime = 2) {
    return layers.length * avaregeTime
}

function quantities(layers) {
    let noodles = 0;
    let sauce = 0;

    for (const key of layers) {
        if (key.toLowerCase() === 'noodles') {
            noodles += 50;
        }

        if (key.toLowerCase() === 'sauce') {
            sauce += 0.2;
        }
    }

    return { noodles, sauce }
}

function addSecretIngredient(friendList, myList) {
    const secretIngredient = friendList[friendList.length - 1];

    myList.push(secretIngredient)
}

function scaleRecipe(recipe, portions) {
    const newRecipe = {};
    for (const ingredient in recipe) {
        newRecipe[ingredient] = recipe[ingredient] * (portions / 2);
    }
    return newRecipe
}