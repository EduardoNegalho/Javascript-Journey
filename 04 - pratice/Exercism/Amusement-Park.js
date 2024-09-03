function createVisitor(name, age, ticketId) {
    return {
        name,
        age,
        ticketId
    }
}

function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor;
}

function ticketStatus(tickets, ticketId) {
    let found = false;
    for (const ticket in tickets) {
        if (ticketId === ticket) {
            found = true;
        }
    }

    if (!found) return 'unknown ticket id';

    if (tickets[ticketId] === null) return 'not sold';

    if (ticketId in tickets) return `sold to ${tickets[ticketId]}`;
}

function simpleTicketStatus(tickets, ticketId) {
    if (tickets[ticketId] === null) return 'invalid ticket !!!';
    if (tickets[ticketId] === undefined) return 'invalid ticket !!!';
    if (tickets[ticketId] !== null) return `${tickets[ticketId]}`;
}

function gtcVersion(visitor) {
    return visitor.gtc?.version;;
}
