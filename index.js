const readline = require('readline-sync');

const randomizer = (min = -5, max = 13) => {
    return Math.floor((Math.random() * (max - min) + min));
}

function EvenOddGame() {

    const setPlayers = (numPlayers) => {
        const newPlayers = []
        for (let i = 0; i < numPlayers; i++) {
            const player = {
                name: readline.question(`Player ${i + 1} Name: \n`),
                score: 0
            }
            newPlayers.push(player)
        }
        return newPlayers
    }

    let numOfPlayers = readline.question('How many players: \n');
    while (Number.isNaN(numOfPlayers) || numOfPlayers < 2 || numOfPlayers > 7) {
        numOfPlayers = + readline.question('Can be only 2 to 7 players. Please enter number of players again')
    };
    players = setPlayers(numOfPlayers);

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
    let highScore = 0;

    while (highScore < scoreToWin) {
        let randomPlayer1 = randomizer(0, players.length);
        let randomPlayer2 = randomizer(0, players.length);

        if (randomPlayer1 === randomPlayer2) continue;

        const currentPlayers = {
            player1: players[randomPlayer1],
            player2: players[randomPlayer2]
        }

        let rand = randomizer();
        if (rand % 2 === 0) {
            addScore(currentPlayers.player1, rand)
        } else {
            addScore(currentPlayers.player2, rand)
        }
        if (players[randomPlayer1].score > highScore) {
            highScore = players[randomPlayer1].score;
        } else if (players[randomPlayer2].score > highScore) {
            highScore = players[randomPlayer2].score;
        }
        console.log(`*******\n${currentPlayers.player1.name} - ${currentPlayers.player1.score}\n${currentPlayers.player2.name} - ${currentPlayers.player2.score}\n*******\n`)
        round++;
    }
}

let game = new EvenOddGame();
