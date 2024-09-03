function timeToMixJuice(name) {
    switch (name) {
        case 'Pure Strawberry Joy':
            return 0.5;
        case 'Energizer':
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3;
        case 'All or Nothing':
            return 5;
        default:
            return 2.5;
    }
}

function limesToCut(wedgesNeeded, limes) {
    let totalWedges = 0;
    let limesCut = 0;
    let wedges = 0;

    while ((totalWedges <= wedgesNeeded) && (limesCut < limes.length)) {
        switch (limes[limesCut]) {
            case "small":
                wedges = 6;
                break;
            case "medium":
                wedges = 8;
                break;
            case "large":
                wedges = 10;
                break;
        }
        totalWedges += wedges;

        if (wedgesNeeded > 0) {
            limesCut++;
        }
    }

    return limesCut;
}

function remainingOrders(timeLeft, orders) {
    while (timeLeft > 0) {
        timeLeft -= timeToMixJuice(orders[0]);
        orders.shift();
    }
    return orders;
}
