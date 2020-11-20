// Code your solutions in this file

names = [ 'Lisa', 'Kaitlin', 'Jan' ]
event = "surprise"

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        console.log('Thank you $(name) for the wonderful $(event) gift!')
    }
}

function printBadges(names) {
    for(let i = 0; i < names.length; i++) {
        console.log("Welcome " + names[i] + `! You are employee #${i+1}.`)
    }
    return names;
}

function tailsNeverFails() {
    let i = 0;
    while (Math.random() >= 0.5) {
        i ++;
    }
    return `You got ${i} tails in a row!`;
}