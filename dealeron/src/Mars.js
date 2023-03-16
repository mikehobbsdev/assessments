const Rover = require('./Rover.js');

class Mars {
    #width;
    #height;
    #rovers;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
        this.#rovers = [];

        if (isNaN(width) || isNaN(height)) {
            console.warn('Mars dimensions invalid, defaulting to 11x11');
            this.#width = this.#height = 10;
        }
    }

    getWidth = () => this.#width;
    getHeight = () => this.#height;

    addRover = (x, y, view) => {
        const rover = new Rover(x, y, view, this.#width, this.#height);
        this.#rovers.push(rover);
        return rover;
    }

    describeRovers = () =>
        this.#rovers
            .map(rover => rover.toString())
            .forEach((x) => { console.log(x) });
}

module.exports = Mars;