const randomizer = (min = -5, max = 13) => {
    return Math.floor((Math.random() * (max - min) + min));
}

module.exports = {
    randomizer
}