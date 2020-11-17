

function writeCards(names, events) {
    let thankYouMessage = []
    for (let i = 0; i < names.length; i++) {
       thankYouMessage.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return thankYouMessage
}

function countDown(startingNumber) {
    while (startingNumber > 0 ) {
        console.log(startingNumber);
        startingNumber--;
    }
    console.log(startingNumber)
}