const Rover = require('../Rover');

describe('Rover ', () => {
    let rover;
    const warnSpy = jest.spyOn(global.console, 'warn');

    beforeEach(() => {
        rover = new Rover(1, 1, 'N', 5, 5);
        warnSpy.mockClear();
    });

    it('initializes', () => {
        expect(rover.toString()).toBe('1 1 N');
        expect(warnSpy).not.toHaveBeenCalled();
    });

    it('initializes defaults on invalid input', () => {
        rover = new Rover('berlin', 'sofia', 'X', 10, 10);

        expect(rover.toString()).toBe('0 0 N');
        expect(warnSpy).toHaveBeenCalledTimes(2);
    });

    it('initializes defaults on out of bounds input', () => {
        rover = new Rover(15, 15, 'S', 10, 10);

        expect(rover.toString()).toBe('0 0 S');
        expect(warnSpy).toHaveBeenCalledTimes(1);
    });

    it('does nothing on invalid input', () => {
        rover.handleCommand('X');
        expect(rover.toString()).toBe('1 1 N');
        expect(warnSpy).toHaveBeenCalledWith('Unknown command X, ignoring it.');
    });

    it('turns left', () => {
        rover.handleCommand('L');
        expect(rover.toString()).toBe('1 1 W');
    });

    it('turns right', () => {
        rover.handleCommand('R');
        expect(rover.toString()).toBe('1 1 E');
    });

    it('moves forward in general', () => {
        rover.handleCommand('M');
        expect(rover.toString()).toBe('1 2 N');
    });

    it('does not move forward at edge', () => {
        rover = new Rover(1, 5, 'N', 5, 5);
        rover.handleCommand('M');
        expect(rover.toString()).toBe('1 5 N');
    });
});
