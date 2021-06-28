const prompt = require('prompt')

const users = [];

prompt.start();

prompt.get([{ name: 'numPlayers', description: 'Enter number of players' }], function (err, result) {
    for (let i = 0; i < result.numPlayers; i++) {
        prompt.get({ name: `Player${i + 1}`, description: `Player ${i + 1} name` }, function (err, result) {
            users.push({ name: result[`Player${i + 1}`], score: 0 })
        })
    }
})

// users.push();