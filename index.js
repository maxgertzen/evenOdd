const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function EvenOdd(round) {
    this.round = round;
    const users = [];
    let numberOfPlayers = null;
    let winner = null;



    // let num = __randomizer();
    // if (num % 2 === 0) {
    //     users[0]['score'] += 1
    //     console.log(`${users[0]['name']} won this round`)
    // } else {
    //     users[1]['score'] += 1
    //     console.log(`${users[1]['name']} won this round`)
    // }

    // if (users[0]['score'] > Math.floor(5 / 2)) {
    //     winner = users[0]
    //     rl.close();
    //     break
    // }
    // else if (users[1]['score'] > Math.floor(5 / 2)) {
    //     winner = users[1]
    //     rl.close()
    //     break
    // }
    // rl.on('close', function () {
    //     console.log(`${winner} has won with ${users[winner].score} points`);
    //     process.exit(0);
    // })


    function start() {
        rl.question("How many players will play ? \n", async function (number) {
            if (Math.round(number.trim()) < 2 || Math.round(number.trim()) > 7) {
                console.log("\nNumber of players allowed is between 2-7")
                rl.close()
            } else {
                numberOfPlayers = number.trim()
            }
        });
        __getNames();
    }

    async function __getNames() {
        for (let i = 0; i < numberOfPlayers; i++) {
            rl.question(`Player${i + 1} name:\n`, function (name) {
                users.push({ name, score: 0 });
                rl.close()
            })
        }
        __runGame();
    }

    function __runGame() {
        console.log('run')
    }

    return {
        start
    }
}

let game = new EvenOdd(5);

game.start()