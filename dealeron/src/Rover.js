const CLOCKWISE = "NESWN";

class Rover {
    #x;
    #y;
    #view;
    #marsWidth;
    #marsHeight;

    constructor(x, y, view, marsWidth, marsHeight) {
        this.#x = x;
        this.#y = y;
        this.#view = view;
        this.#marsWidth = marsWidth;
        this.#marsHeight = marsHeight;

        if (isNaN(x) || isNaN(y)) {
            console.warn('Rover position invalid, defaulting to origin');
            this.#x = this.#y = 0;
        }

        if (x < 0 || x > marsWidth || y < 0 || y > marsHeight) {
            console.warn('Rover position out of bounds, defaulting to origin');
            this.#x = this.#y = 0;
        }

        if (CLOCKWISE.indexOf(view) < 0) {
            console.warn('Rover direction invalid, defaulting to north');
            this.#view = 'N';
        }
    }

    toString = () => `${this.#x} ${this.#y} ${this.#view}`;

    handleCommand = (command) => {
        switch (command) {
            case 'L':
                this.#turnLeft();
                break;
            case 'R':
                this.#turnRight();
                break;
            case 'M':
                this.#moveForward();
                break;
            default:
                console.warn(`Unknown command ${command}, ignoring it.`);
                break;
        }
    }

    #turnLeft = () => {
        const nextDirectionIndex = CLOCKWISE.lastIndexOf(this.#view) - 1;
        this.#view = CLOCKWISE[nextDirectionIndex];
    }

    #turnRight = () => {
        const nextDirectionIndex = CLOCKWISE.indexOf(this.#view) + 1;
        this.#view = CLOCKWISE[nextDirectionIndex];
    }

    #moveForward = () => {
        switch (this.#view) {
            case 'N':
                this.#y = Math.min(this.#y + 1, this.#marsHeight);
                break;
            case 'S':
                this.#y = Math.max(this.#y - 1, 0);
                break;
            case 'E':
                this.#x = Math.min(this.#x + 1, this.#marsWidth);
                break;
            case 'W':
                this.#x = Math.max(this.#x - 1, 0);
                break;
        }
    }
}

module.exports = Rover;