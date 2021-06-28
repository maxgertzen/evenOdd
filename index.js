const readline = require('readline-sync');

const randomizer = (min = -5, max = 13) => {
    return Math.floor((Math.random() * (max - min) + min));
}

function EvenOddGame() {
    const players = [
        {
            name: readline.question('1st Player Name: \n'),
            score: 0
        },
        {
            name: readline.question('2nd Player Name: \n'),
            score: 0
        }]

    const rounds = readline.question('How many rounds?\n');
    const scoreToWin = Math.floor(rounds / 2) + 1;

    const addScore = (user, randomNumber) => {
        user.score++;
        console.log(`${user.name} is winner of round ${round}, after drawing ${randomNumber} random number.\n1 score added.`)
        if (user.score === scoreToWin) {
            console.log(`${user.name} won the game with score of ${user.score}`)
        }
    }

    let round = 1;
    while (players[0].score < scoreToWin && players[1].score < scoreToWin) {
        let rand = randomizer();
        if (rand % 2 === 0) {
            addScore(players[0], rand)
        } else {
            addScore(players[1], rand)
        }
        console.log(`*******\n${players[0].name} - ${players[0].score}\n${players[1].name} - ${players[1].score}\n*******\n`)
        round++;
    }
}

let game = new EvenOddGame();
