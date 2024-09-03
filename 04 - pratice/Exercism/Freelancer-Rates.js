function dayRate(ratePerHour) {
    return 8 * ratePerHour;
}

function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const numOfMonths = Math.floor(numDays / 22);
    const rateMonth = 22 * dayRate(ratePerHour);
    const monthlyDiscountedRate = (1 - discount) * rateMonth

    const numExtraDays = numDays % 22;
    const priceExtraDays = numExtraDays * dayRate(ratePerHour);

    return Math.ceil(numOfMonths * monthlyDiscountedRate + priceExtraDays);
}
