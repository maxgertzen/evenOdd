const argv = require("minimist")(process.argv.slice(2));

function User(name) {
    this.name = name;
    this.score = 0;
}


const randomizer = (min = -5, max = 13) => {
    return Math.floor((Math.random() * (max - min) + min));
}

const declareWinner = (...users) => users.find((player) => player.score === 3);

module.exports = {
    User,
    randomizer,
    declareWinner
}