const prompt = require('prompt-sync')();
const Mars = require('./src/Mars.js');

// take mars grid size
const gridInput = prompt('Input the grid size (i.e. "1 2"): ');

//parse grid input
const [widthInput, heightInput] = gridInput.split(' ');
const mars = new Mars(parseInt(widthInput), parseInt(heightInput));

// repeatedly take pair lines of input, rover initial coordinates and instructions (or empty coordinates to stop)
const inputNewRover = () => prompt('Input a rover\'s initial coordinates (i.e. "1 1 N" or nothing to end): ');
let roverInput = inputNewRover();

while (roverInput.length > 0) {
    const [xInput, yInput, view] = roverInput.split(' ');
    const x = parseInt(xInput);
    const y = parseInt(yInput);

    const rover = mars.addRover(x, y, view);

    const instructionsInput = prompt('Input the instructions for this rover (i.e. "LMRM"): ');
    instructionsInput.split('').forEach(rover.handleCommand);

    roverInput = inputNewRover();
}

console.log("Here is where all rovers are now:");
mars.describeRovers();
